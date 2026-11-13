/**
 * 仙台・銀山溫泉 雙人旅誌 — Google Sheets 雲端即時同步後台 (Google Apps Script)
 * 
 * 支援「試算表內建指令碼」與「獨立 Apps Script 專案」：
 * 若為獨立專案，首次執行時會自動在您的 Google Drive 建立「仙台・銀山溫泉 雙人旅誌後台」試算表並自動綁定！
 */

const STORE_SHEET_NAME = 'TripStore';
const EXPENSE_SHEET_NAME = '記帳明細表';
const DEFAULT_ROOM_ID = 'sendai_2027_couple';

function getTargetSpreadsheet() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  if (ss) return ss;

  const props = PropertiesService.getScriptProperties();
  const savedId = props.getProperty('SPREADSHEET_ID');
  if (savedId) {
    try {
      return SpreadsheetApp.openById(savedId);
    } catch (e) {}
  }

  ss = SpreadsheetApp.create('仙台・銀山溫泉 雙人旅誌後台');
  props.setProperty('SPREADSHEET_ID', ss.getId());
  return ss;
}

function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    if (headers && headers.length > 0) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#1b2431').setFontColor('#e8b86d');
      sheet.setFrozenRows(1);
    }
  }
  return sheet;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// 讀取雲端資料 (GET)
function doGet(e) {
  try {
    const room = (e && e.parameter && e.parameter.room) ? String(e.parameter.room).trim() : DEFAULT_ROOM_ID;
    const ss = getTargetSpreadsheet();
    const sheet = getOrCreateSheet(ss, STORE_SHEET_NAME, ['room_id', 'updated_at', 'payload_json']);

    const rows = sheet.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if (String(rows[i][0]).trim() === room) {
        const rawJson = rows[i][2];
        const parsed = rawJson ? JSON.parse(rawJson) : null;
        return jsonResponse({
          ok: true,
          room: room,
          sheetUrl: ss.getUrl(),
          updatedAt: rows[i][1] || '',
          data: parsed
        });
      }
    }

    return jsonResponse({
      ok: true,
      room: room,
      sheetUrl: ss.getUrl(),
      data: null,
      msg: '雲端尚無資料，將自動初始化'
    });
  } catch (err) {
    return jsonResponse({ ok: false, error: err.message });
  }
}

// 寫入與同步雲端資料 (POST)
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const bodyText = (e && e.postData && e.postData.contents) ? e.postData.contents : '{}';
    const req = JSON.parse(bodyText);
    const room = (req.room) ? String(req.room).trim() : DEFAULT_ROOM_ID;
    const payload = req.data || null;

    if (!payload) {
      return jsonResponse({ ok: false, error: 'Missing data payload' });
    }

    const ss = getTargetSpreadsheet();
    const sheet = getOrCreateSheet(ss, STORE_SHEET_NAME, ['room_id', 'updated_at', 'payload_json']);
    const nowStr = Utilities.formatDate(new Date(), 'Asia/Taipei', 'yyyy-MM-dd HH:mm:ss');

    const rows = sheet.getDataRange().getValues();
    let targetRow = -1;
    for (let i = 1; i < rows.length; i++) {
      if (String(rows[i][0]).trim() === room) {
        targetRow = i + 1;
        break;
      }
    }

    const jsonStr = JSON.stringify(payload);
    if (targetRow > 0) {
      sheet.getRange(targetRow, 2, 1, 2).setValues([[nowStr, jsonStr]]);
    } else {
      sheet.appendRow([room, nowStr, jsonStr]);
    }

    // 同步整理一份乾淨的「記帳明細表」，方便直接在 Google 試算表查閱
    if (Array.isArray(payload.expenses)) {
      syncExpenseTable(ss, payload.expenses, payload.fx || 0.215);
    }

    return jsonResponse({
      ok: true,
      room: room,
      updatedAt: nowStr
    });
  } catch (err) {
    return jsonResponse({ ok: false, error: err.message });
  } finally {
    lock.releaseLock();
  }
}

function syncExpenseTable(ss, expenses, fxRate) {
  const expSheet = getOrCreateSheet(ss, EXPENSE_SHEET_NAME, ['編號', '消費項目', '分類', '幣別', '原幣金額', '約合台幣 (NT$)', '備註']);
  const lastRow = expSheet.getLastRow();
  if (lastRow > 1) {
    expSheet.getRange(2, 1, lastRow - 1, 7).clearContent();
  }
  if (!expenses || expenses.length === 0) return;

  const rate = Number(fxRate) || 0.215;
  const values = expenses.map((ex, idx) => {
    const amt = Number(ex.amount) || 0;
    const cur = ex.currency === 'JPY' ? 'JPY' : 'TWD';
    const twd = cur === 'JPY' ? Math.round(amt * rate) : Math.round(amt);
    return [
      idx + 1,
      ex.title || '',
      ex.category || '其他',
      cur,
      amt,
      twd,
      ex.note || ''
    ];
  });

  expSheet.getRange(2, 1, values.length, 7).setValues(values);
}

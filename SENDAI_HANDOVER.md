# 仙台雙人旅遊 Web App 專案交接與開發指南（Prompt & Architecture Spec for AI）

> **給接手 AI 的指令**：  
> 本文件為「大阪・海之京都旅冊」經過數十輪使用者深度體驗與 UI/UX 反覆打磨後的**最終成熟架構交接筆記**。  
> 你的任務是**基於此架構與規格，為使用者打造「三月底仙台（東北）雙人旅遊 Web App」**。  
> 請嚴格遵守本文件列出的**技術棧、UI/UX 規範、Supabase 後台共用隔離機制、資料結構與避坑防呆禁忌**，確保仙台版本與大阪版本保有 100% 一致的高質感、零漂移（Zero Drift）與流暢操作體驗。

---

## 一、專案核心理念與使用者偏好（AI 必須牢記）

1. **使用者定位**：夫妻兩人專用（「老公」與「老婆」），主要在手機（iOS Safari / Android Chrome）離線或弱網環境下瀏覽與操作。
2. **視覺調性**：極簡、優雅、日系呼吸感（日本東北「杜之都」森林綠、松島深海藍與淡雅灰白背景），強調大字清晰、資訊分類收斂。
3. **極簡堅持（使用者明確禁忌，千萬不要自作聰明加回）**：
   - ❌ **絕對不要算「誰該給誰錢」的分帳結算功能**（使用者明確要求：我們是夫妻，不需要算要給誰錢，只需要記帳與統計各自分類花費）。
   - ❌ **行程標籤未標註時就是一般行程，絕不可加上「一般」字樣的標籤**（只在有特殊屬性時顯示 `🚇 通勤`、`🏨 住宿`、`✈️ 航班`）。
   - ❌ **頂部標題列絕不可放長文字按鈕或連線診斷按鈕**（所有文字會被擠壓換行；連線診斷收納於「更多」分頁第 6 區塊，頂部右側僅保留 `☀` 天氣 與 `¥` 換匯 兩顆 34×34px 小按鈕）。
   - ❌ **新增行程表單的「結束時間」絕不可與時段、開始時間塞在同一列**（手機寬度不足會嚴重擁擠，必須分成兩列：第 1 列為時段下拉＋開始時間；第 2 列為展開式的獨立結束時間）。

---

## 二、技術架構（Zero-Build PWA + Supabase BaaS）

```
┌────────────────────────────────────────────────────────┐
│                   前端 (純原生 PWA)                      │
│   index.html ── styles.css ── data.js ── app.js        │
│   sw.js (Service Worker 離線快取) + manifest.json       │
└───────────────────────────┬────────────────────────────┘
                            │ REST API (No SDK, 純 fetch)
                            ▼
┌────────────────────────────────────────────────────────┐
│            共用 Supabase 後台 (免額外付費/免後端)           │
│   Project: https://vkczkibsqppyrivvafjk.supabase.co    │
│   Table: trip_store (id PRIMARY KEY, data JSONB)       │
│   • 越南專案: id = 'main'                               │
│   • 大阪專案: id = 'osaka_2026_couple'                 │
│   • 仙台專案: id = 'sendai_2027_couple' (或指定代號)    │
└────────────────────────────────────────────────────────┘
```

1. **無編譯建置（Zero Build）**：
   - 不使用 Node.js、Vite、Webpack、React、Vue。純原生 HTML5 + CSS3 + ES6 JavaScript。
   - 只要將靜態檔案部署於 GitHub Pages、Vercel 或本機伺服器即可直接運作。
2. **PWA 漸進式網頁應用**：
   - 支援「加到主畫面」全螢幕運行，無瀏覽器網址列。
   - `sw.js` 快取所有核心資源，無網路時亦能秒開，離線時自動寫入 `localStorage`，連網後自動與雲端增量同步。
3. **Supabase 跨專案共用與 100% 獨立隔離機制**：
   - **共用資料庫**：沿用現有 Supabase 專案 URL 與 public anon key，無須另開新專案。
   - **資料表**：`trip_store`（Key-Value 設計，欄位只有 `id text primary key`, `data jsonb`）。
   - **隔離代號（Room ID）**：
     - 越南：`id = "main"`
     - 大阪：`id = "osaka_2026_couple"`
     - 仙台：**必須設定為 `id = "sendai_2027_couple"`**（程式碼內設安全防護，嚴禁覆蓋到 `main` 或 `osaka_2026_couple`）。
   - **同步方式**：使用 Supabase REST API `POST /rest/v1/trip_store?on_conflict=id` 搭配標頭 `Prefer: resolution=merge-duplicates,return=minimal`。

---

## 三、檔案組織與職責劃分

| 檔案名稱 | 職責與內容規範 |
| :--- | :--- |
| **`index.html`** | 應用程式外殼（App Shell）、5 大底部導覽分頁、磨砂玻璃浮出彈窗（Modal）、SVG 向量圖示。 |
| **`styles.css`** | 全域變數、排版、iOS Safe Area、磨砂玻璃效果（`backdrop-filter: blur(12px)`）、防止輸入框縮放字級、卡片陰影與 Spring 入場動畫。 |
| **`data.js`** | **仙台專屬靜態旅遊資料庫**（行程初始值、美食店家、日語常用小卡、行前打包清單、實用連結、緊急聯絡）。 |
| **`app.js`** | 核心邏輯（單一資料流狀態機、Supabase REST 雙向同步、即時匯率換算 API、行程排序/拖曳、My-Bank 記帳滑桿與分攤、語音合成發音）。 |
| **`sw.js`** | Service Worker 離線快取控制，每次更版手動遞增 `CACHE_NAME`（例如 `sendai-trip-v1`）。 |
| **`manifest.json`** | PWA 桌面圖示與全螢幕啟動設定。 |
| **圖示資源** | `icon.png` (38×38/512×512)、`apple-touch-icon.png`。 |

---

## 四、UI/UX 與 CSS 核心規範（極致細節）

### 1. 配色變數建議（仙台・杜之都風格）
將大阪的「海之京都淡藍」轉化為「仙台・杜之都青葉綠與伊達海軍藍」：
```css
:root {
  --bg: #F4F7F5;              /* 柔和白綠底色，耐看低反光 */
  --card: #FFFFFF;            /* 純白卡片背景 */
  --line: #DCE5E0;            /* 細緻邊框線條 */
  --text: #1B2B23;            /* 主文字（深墨綠黑） */
  --sub: #5C7065;             /* 次要說明文字 */
  --accent: #2E5A44;          /* 杜之都主色（青葉深綠）或伊達海軍藍 #26435F */
  --accent-soft: #E8F2EC;     /* 主色柔和淡底（用於點選高亮、標籤） */
  --green: #2F6F5E;           /* 正確、已完成、台幣換算顯示色 */
  --gold: #A67C38;            /* 航班、警告提示金 */
  --red: #B0432E;             /* 刪除、退稅、警戒色 */
}
```

### 2. 關鍵 CSS 防呆規範（必備）
1. **防止 iOS Safari 點擊輸入框時畫面自動放大**：
   ```css
   /* 所有 input, select, textarea 的字級必須 >= 16px，否則 iOS 會強行 zoom-in 破壞排版 */
   input, select, textarea {
     font-size: 16px !important;
   }
   ```
2. **iPhone 底部安全邊距（Safe Area）**：
   ```css
   .bottom-nav {
     padding-bottom: max(10px, env(safe-area-inset-bottom, 0px));
   }
   .app-shell {
     padding-bottom: calc(75px + env(safe-area-inset-bottom, 0px));
   }
   ```
3. **頂部標題自動換行，不截斷**：
   ```css
   .eyebrow {
     font-size: 11px;
     font-weight: 700;
     letter-spacing: 0.04em;
     color: var(--accent);
     word-break: break-word;
   }
   .header-subtitle {
     font-size: clamp(15px, 4.2vw, 17px);
     font-weight: 800;
     line-height: 1.35;
     word-break: break-word;
   }
   ```
4. **磨砂玻璃彈窗質感（Frosted Glass Modal）**：
   ```css
   .app-modal-backdrop, .exp-modal-backdrop, .modal-overlay {
     position: fixed;
     inset: 0;
     z-index: 300;
     background: rgba(14, 28, 42, 0.48);
     backdrop-filter: blur(12px);
     -webkit-backdrop-filter: blur(12px);
     display: none;
     align-items: center;
     justify-content: center;
     padding: 16px 14px calc(24px + env(safe-area-inset-bottom, 0px)) 14px;
   }
   .app-modal-sheet, .exp-modal-sheet {
     animation: modalSheetPop 0.22s cubic-bezier(0.16, 1, 0.3, 1);
     border-radius: 16px;
     box-shadow: 0 20px 45px rgba(10, 25, 45, 0.22);
   }
   @keyframes modalSheetPop {
     from { opacity: 0; transform: scale(0.95) translateY(12px); }
     to { opacity: 1; transform: scale(1) translateY(0); }
   }
   ```

---

## 五、各分頁功能與 UI 實作細節

### 1. 頂部 Header 與隱藏式工具
- **左側**：旅冊專屬圖示（38×38px）、倒數小標（`SENDAI 2027 · D-120`）、當日主標題（`仙台・松島・秋保溫泉四日旅`）。
- **右側功能按鈕（嚴格保持 34×34px 圓角小按鈕，無多餘長文字）**：
  1. `☀` **天氣按鈕**：展開/收起橫向逐日天氣與降雨機率抽屜。
  2. `¥` **換匯計算機**：展開/收起即時換匯面板（日圓 ⇄ 台幣即時雙向換算、4 顆常用面額快選、清空鍵 `⌫`、對調鍵 `⇄`）。

---

### 2. Tab 1：時間表（Timeline）
- **天數切換標籤（Day Tabs）**：`Day 1 · 3/25 (四)`、`Day 2 · 3/26 (五)` ... 點擊滑順切換。
- **行程卡片清單**：
  - **極簡右側按鈕佈局**：
    - 右上角：`✏️` 修改行程按鈕。
    - 右下角：`🗺️` Google Maps 地點跳轉按鈕（自動帶入日文搜尋關鍵字）。
    - 左側：`⋮⋮` 拖曳手柄（支援 HTML5 Drag & Drop 自由調整當日行程順序）。
  - **屬性標籤防呆**：
    - 若為一般行程，不顯示任何膠囊標籤。
    - 特殊行程時才顯示小膠囊：`🚇 通勤`（淺藍）、`🏨 住宿`（青綠）、`✈️ 航班`（金棕）。
- **浮出式行程編輯表單（Modal）結構**：
  - **第 1 欄**：地點／事項（`tl-title-input`）
  - **第 2 欄**：活動類型下拉選單（`一般行程`、`🚇 通勤`、`🏨 住宿`、`✈️ 航班`）
  - **第 3 欄（雙列時間設定，徹底避免擁擠）**：
    - 頂部：標籤「時間設定」＋ 右側按鈕「`＋ 設定結束時間`」。
    - **第一列**：
      - 左：時段快速下拉選單（`⏱️ 自訂時間`、`📅 全天`、`🍳 早餐 (08:30)`、`☕ 上午 (10:00)`、`🍜 午餐 (12:30)`、`🍵 下午 (14:30)`、`🌅 傍晚 (17:00)`、`🍱 晚餐 (18:30)`、`🍢 宵夜 (21:30)`）。
      - 右：開始時間 `[ 時 ] : [ 分 ]` 滾輪選單。
    - **第二列（展開時）**：
      - 獨立橫列，標籤 `↳ 結束時間至`、結束時間 `[ 時 ] : [ 分 ]` 滾輪選單 ＋ `✕ 拿掉` 按鈕。
  - **第 4 欄**：備註文字方塊（交通搭乘技巧、班次時刻等）。

---

### 3. Tab 2：記帳（Expenses）——「My-Bank 閃電記帳系統」
- **頂部快速記帳區（Quick Capsules）**：
  - 付款人切換按鈕（`老公付款` / `老婆付款`）。
  - 幣別切換（`日圓 ¥` / `台幣 $`）。
  - **6 顆日本旅遊高頻膠囊**（預設：超商、牛舌/定食、地鐵/JR車票、藥妝購物、自動販賣機、居酒屋）：點擊微調，或點擊膠囊右上角 `⚡` 一秒完成記帳並飛出浮動金額小彩屑。
- **浮出式微調/手動記帳表單（Modal）——「Hero 金額卡」結構**：
  - **項目名稱輸入框**
  - **Hero 金額卡片（淡底圓角卡片）**：
    - 第一列：幣別下拉（`JPY` / `TWD`）＋ 大字無邊框數字輸入框 ＋ `⌫ 歸零` 按鈕。
    - 第二列：即時雙幣折合換算（如 `¥ 2,500 ≈ NT$ 538`）。
    - 第三列：平滑滑桿（Range Slider，日幣 0~20,000，台幣 0~5,000）。
    - 第四列：4 顆步進調價鍵（`-1000`, `-100`, `+100`, `+1000`）。
    - 第五列：常用面額快捷膠囊（`¥500`, `¥1,000`, `¥2,500`, `¥5,000` 等）。
  - **分類（美食/交通/住宿/購物等）與誰付的（老公/老婆）—— 雙欄對齊排版**。
  - **使用對象平分設定**：點選 `老公`、`老婆`，即時顯示精確到元的分攤金額（餘數自動由付款人吸收，加總必等於台幣總額）。
  - **旅程總額統計**：折合台幣總花費、老公已付總額、老婆已付總額、分類花費橫條圖。（**絕不顯示結算欠款**）。

---

### 4. Tab 3：美食與口袋名單（Places）
- **標籤篩選列**：全部、牛舌、燒肉、拉麵、甜點、海鮮、咖啡、景點等。
- **卡片資訊**：店家中文名稱、日文原名、推薦備註、標籤。
- **操作按鈕**：
  - `🗺️ Google 地圖`：一鍵以精準日文名稱跳轉 Google Maps App。
  - `＋ 排入行程`：彈出小視窗，選擇欲排入 Day 幾與預估時間，自動加入時間軸。

---

### 5. Tab 4：小卡（Phrases 常用日語字卡）
- **分類過濾**：問候、點餐、購物、交通、住宿、緊急身體不適。
- **點擊卡片彈出全螢幕大字視窗**：
  - 巨大日文漢字＋假名標音，直接出示給日本司機或店員看。
  - 羅馬拼音／中文諧音輔助發音。
  - **🔊 語音朗讀按鈕**：使用瀏覽器原生 `window.speechSynthesis`（語言指定 `ja-JP`），直接念給店員聽。
  - **📋 複製日文按鈕**。

---

### 6. Tab 5：更多（More）—— 全區塊手風琴摺疊收合
更多分頁共 7 個區塊，**預設全數收合**，具有順暢的旋轉箭頭動畫：
1. **1 · 雙人行前準備清單**：預設收合，標題右側即時顯示完成度徽章（如 `85%`），展開可勾選、自訂新增行前項目。
2. **2 · 票券夾、仙台飯店卡 ＆ 實用連結**：
   - **仙台飯店司機大字卡（常駐頂部）**：
     - 中文名稱、日文全名、日文地址、一鍵複製日文地址按鈕。
     - **「🚖 司機字卡」按鈕**：點擊彈出全螢幕日文司機溝通字卡（例：「請載我們到仙台站前 APA 飯店...」）。
   - 自訂雲端票券夾（Google Drive / KKday 憑證網址）。
3. **3 · 3月下旬仙台・宮城氣候指南**：春初早晚溫差大、防寒防風、洋蔥式穿搭建議。
4. **4 · 交通與行程關鍵提醒**：仙台機場 Access 線（約 25 分鐘）、JR 東日本鐵路周遊券、盧葡兒仙台觀光巴士（Loople Sendai）搭乘要訣。
5. **5 · 緊急聯絡電話**：日本警察局 110、消防救護 119、台北駐日經濟文化代表處（或札幌/仙台辦事處）、JNTO 中文醫療支援電話。
6. **6 · Supabase 雲端同步與診斷**：
   - 即時連線綠燈指示燈 ＆「🔍 立即診斷連線」按鈕。
   - 專屬房間代號（`sendai_2027_couple`）。
   - 備份碼複製與貼上匯入功能。
7. **7 · 身份與匯率手動設定**：切換目前手機身份（老公／老婆）、手動強制重新抓取台銀日圓即時匯率。

---

## 六、後台共用與資料隔離實作碼（AI 直接套用）

在 `app.js` 中實作 Supabase 同步時，請**直接複製以下經過驗證的架構**，僅修改 `DEFAULT_ROOM_ID`：

```javascript
// ==================== Supabase 同步與房間隔離 ====================
(function () {
  const C = window.__APP_CORE;

  // 沿用與越南、大阪相同的 Supabase 後台
  const DEFAULT_SB_URL = 'https://vkczkibsqppyrivvafjk.supabase.co';
  const DEFAULT_SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrY3praWJzcXBweXJpdnZhZmprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxMjE0ODcsImV4cCI6MjA5OTY5NzQ4N30.Io9qB9Q4_-qtjQBNW-pGqrDYb3ZzjrRdOyMUR_E_cW8';
  
  // ★★★ 關鍵：仙台專屬房間代號，嚴禁使用 'main' (越南) 或 'osaka_2026_couple' (大阪) ★★★
  const DEFAULT_ROOM_ID = 'sendai_2027_couple';

  function getSupaConfig() {
    try {
      const raw = localStorage.getItem('sendai_couple_supabase_cfg_v1');
      if (!raw) return { url: DEFAULT_SB_URL, key: DEFAULT_SB_KEY, room: DEFAULT_ROOM_ID };
      const parsed = JSON.parse(raw);
      // 強制防呆：若被誤設為 main 或 osaka，自動校正回仙台代號
      const safeRoom = (!parsed.room || parsed.room === 'main' || parsed.room.includes('osaka')) 
        ? DEFAULT_ROOM_ID 
        : parsed.room;
      return {
        url: parsed.url || DEFAULT_SB_URL,
        key: parsed.key || DEFAULT_SB_KEY,
        room: safeRoom
      };
    } catch (e) {
      return { url: DEFAULT_SB_URL, key: DEFAULT_SB_KEY, room: DEFAULT_ROOM_ID };
    }
  }

  // 推送至雲端 (Upsert)
  window.pushToSupabaseAsync = async function () {
    const cfg = getSupaConfig();
    if (!cfg.url || !cfg.key) return;
    const cleanPayload = sanitizeStateForCloud(C.getState());
    const endpoint = `${cfg.url.replace(/\/$/, '')}/rest/v1/trip_store?on_conflict=id`;
    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'apikey': cfg.key,
          'Authorization': `Bearer ${cfg.key}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates,return=minimal'
        },
        body: JSON.stringify([{
          id: cfg.room, // 獨立紀錄於此 row
          data: cleanPayload
        }])
      });
    } catch (err) {
      console.warn('雲端同步推播暫時離線', err);
    }
  };

  // 從雲端拉取 (Pull)
  window.pullFromSupabaseAsync = async function (manual = false) {
    const cfg = getSupaConfig();
    if (!cfg.url || !cfg.key) return { ok: false, msg: '尚未設定 Supabase' };
    const endpoint = `${cfg.url.replace(/\/$/, '')}/rest/v1/trip_store?id=eq.${encodeURIComponent(cfg.room)}&select=data`;
    try {
      const res = await fetch(endpoint, {
        headers: {
          'apikey': cfg.key,
          'Authorization': `Bearer ${cfg.key}`
        }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const rows = await res.json();
      if (rows && rows.length > 0 && rows[0].data) {
        const merged = mergeStates(C.getState(), rows[0].data);
        C.setState(merged);
        if (window.renderAll) window.renderAll();
        return { ok: true, msg: '雲端同步成功！已載入最新仙台旅冊資料' };
      }
      // 若該房間尚無遠端紀錄，先將本機資料推上
      await window.pushToSupabaseAsync();
      return { ok: true, msg: '已成功在雲端初始化仙台專屬旅冊！' };
    } catch (err) {
      return { ok: false, msg: `連線失敗，目前處於離線快取模式 (${err.message})` };
    }
  };
})();
```

---

## 七、仙台專屬資料準備檢核表（接手 AI 請向使用者索取或預設填入）

接手 AI 在生成 `data.js` 前，請向使用者確認以下資訊（若使用者尚未確定，請使用標準推薦行程作為預設值）：

1. **日期與天數**：三月底（通常為 4 天 3 夜 或 5 天 4 夜，例：2027.03.25 – 03.28）。
2. **航班資訊**：
   - 去程航班（例如：星宇航空 JX862 桃園 ➔ 仙台、長榮航空 BR118、台灣虎航 IT254）。
   - 返程航班（例如：星宇 JX863、長榮 BR117、虎航 IT255）。
3. **住宿飯店**：
   - 飯店中文名稱、日文名稱、日文地址、最近地鐵/JR 出口（例如：仙台威斯汀酒店、仙台站前 APA 飯店、東大都會飯店仙台等）。
4. **行程亮點規劃（三月下旬仙台精選推薦）**：
   - **Day 1（抵達仙台・市區散步）**：仙台機場搭 Access 線抵達仙台站 ➔ 飯店寄放行李 ➔ 仙台站牛舌通（伊達の牛たん本舗 / 利久） ➔ AER 展望台 31F 俯瞰市景 ➔ 定禪寺通綠意散步 ➔ 一番町商店街採買。
   - **Day 2（松島海岸日本三景一日遊）**：搭仙石線至松島海岸站 ➔ 松島灣遊覽船（五大堂、福浦島紅橋） ➔ 午餐：松島牡蠣與海鮮丼 ➔ 瑞巖寺歷史漫步 ➔ 傍晚返回仙台享用燒肉米澤牛或水瀧鍋。
   - **Day 3（歷史名勝與溫泉慢活）**：搭盧葡兒仙台觀光巴士 ➔ 瑞鳳殿（伊達政宗靈廟） ➔ 仙台城跡（青葉城・伊達政宗騎馬雕像看仙台全景） ➔ 大崎八幡宮（國寶黑漆金箔神社） ➔ 下午可安排前往秋保溫泉泡日歸湯或參觀秋保大瀑布。
   - **Day 4（市場巡禮・伴手禮・返台）**：仙台朝市（體驗在地海鮮生魚片丼、可樂餅） ➔ S-PAL 仙台百貨採買伴手禮（毛豆泥麻糬 萩之月、牛舌即食包、生仙貝） ➔ 搭 Access 特急前往仙台機場 SDJ 辦理退稅登機 ➔ 平安返台。
5. **已購項目與預設記帳**：機票款、住宿費、網卡 eSIM、交通票券（JR 鐵路周遊券等）。

---

## 八、接手 AI 的開發步驟（Step-by-Step SOP）

請依以下步驟實作，完成後自我驗證：
1. **建立專案結構**：建立 `index.html`、`styles.css`、`data.js`、`app.js`、`sw.js`、`manifest.json` 與圖示。
2. **填入仙台資料庫 (`data.js`)**：設定正確日期、經緯度關鍵字、景點日文名稱、牛舌/牡蠣名店、日語實用語音字卡。
3. **調整專屬色調 (`styles.css`)**：將主色系切換為東北杜之都綠（`#2E5A44`）或伊達海軍藍（`#26435F`），保持極簡淡雅。
4. **鎖定 Supabase 隔離 (`app.js`)**：確認 `DEFAULT_ROOM_ID = 'sendai_2027_couple'`，不覆蓋舊專案。
5. **嚴格檢查 5 大防呆規範**：
   - [ ] 行程編輯彈窗的「結束時間」獨立在下一列。
   - [ ] 時間左側為時段推薦下拉選單。
   - [ ] 記帳模組保留 Hero 卡片、滑桿、步進、分攤，**無結算欠款功能**。
   - [ ] 頂列 Header 標題自然換行，無省略號截斷，右側僅有 `☀` 與 `¥`。
   - [ ] 行程類型未選時不顯示「一般」標籤。
   - [ ] 所有輸入框字級皆為 16px，磨砂玻璃樣式正常。
6. **快取更名與離線測試**：`sw.js` 的 `CACHE_NAME` 設為 `sendai-trip-v1`，執行語法驗證（`node --check app.js data.js sw.js`）。

---
*這份交接筆記是專案最完整的架構資產，交給下一個 AI 即可 1:1 精準復刻仙台版本！*

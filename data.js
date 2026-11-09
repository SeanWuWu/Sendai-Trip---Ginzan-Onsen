window.HANDBOOK_DATA = {
  tripMeta: {
    startDate: '2027-03-27',
    endDate: '2027-03-31',
    timezone: 'Asia/Tokyo',
    citiesLine: '仙台機場 · 仙台車站 · 松島海岸 · 銀山溫泉 · 定禪寺通',
    members: ['老公', '老婆'],
    hotels: [
      {
        id: 'hotel-east',
        nightsLabel: 'Day 1–2（3/27–3/29 連住 2 晚）',
        name: '仙台東大都會大飯店 (Hotel Metropolitan Sendai East)',
        jpName: 'ホテルメトロポリタン仙台イースト',
        address: '〒980-8487 宮城県仙台市青葉区中央1丁目1-1',
        accessNote: 'JR 仙台站東口直通（3F 設專用連通口，出站即達免淋雨）',
        driverPhrase: '「JR仙台駅東口直結の『ホテルメトロポリタン仙台イースト』までお願いします。」',
        q: 'ホテルメトロポリタン仙台イースト Hotel Metropolitan Sendai East'
      },
      {
        id: 'hotel-yanadaya',
        nightsLabel: 'Day 3（3/29–3/30 住宿 1 晚・一泊二食）',
        name: '銀山溫泉 御宿やなだ屋 (Oyado Yanadaya)',
        jpName: '銀山温泉 御宿 やなだ屋',
        address: '〒999-4333 山形県尾花沢市銀山新畑416',
        accessNote: 'JR 大石田站轉乘旅館接駁車或銀山花笠號巴士（約 35–40 分鐘）',
        driverPhrase: '「尾花沢市の銀山温泉『御宿 やなだ屋』までお願いします。（銀山温泉入口の乗降場まで）」',
        q: '銀山温泉 御宿 やなだ屋 Yamagata Obanazawa Ginzan Onsen'
      },
      {
        id: 'hotel-roynet',
        nightsLabel: 'Day 4（3/30–3/31 住宿 1 晚）',
        name: '大和ROYNET飯店 仙台西口 PREMIER',
        jpName: 'ダイワロイネットホテル仙台西口 PREMIER',
        address: '〒980-0021 宮城県仙台市青葉区中央3丁目7-25',
        accessNote: 'JR 仙台站西口步行約 4 分鐘（地下鐵仙台站南 1 出口步行 1 分鐘）',
        driverPhrase: '「仙台駅西口（青葉通沿い）の『ダイワロイネットホテル仙台西口 PREMIER』までお願いします。」',
        q: 'ダイワロイネットホテル仙台西口 PREMIER Daiwa Roynet Hotel Sendai Nishiguchi Premier'
      }
    ]
  },
  days: [
    {
      dayIndex: 0,
      label: 'Day 1',
      dateStr: '3/27',
      fullDate: '2027-03-27',
      weekday: '週六',
      routeSummary: '桃園機場 JX862 ➔ 仙台國際機場 SDJ ➔ 仙台機場 Access 線 ➔ 仙台東大都會大飯店寄行李 ➔ 仙台站牛舌通・AER 展望台',
      routeJpMap: '仙台空港 (SDJ) · 仙台空港アクセス線 · 仙台駅 · ホテルメトロポリタン仙台イースト · 牛たん通り · AER展望テラス',
      items: [
        {
          id: 'd1-1',
          time: '11:50–16:00',
          title: '去程航班 星宇航空 JX862 抵達仙台機場 (SDJ)',
          note: '星宇航空 JX862（桃園 TPE 11:50 起飛 ➔ 仙台 SDJ 16:00 抵達，實際時刻依電子機票為準）。預留入境審查、領行李與前往 2F 連通鐵路車站時間。',
          q: '仙台空港 Sendai Airport',
          flight: true,
          tag: '航班'
        },
        {
          id: 'd1-2',
          time: '16:45–17:15',
          title: '搭乘仙台機場 Access 線前往 JR 仙台站',
          note: '由仙台機場站搭乘「仙台空港アクセス線」直達 JR 仙台站（快速約 17 分鐘、普通約 25 分鐘，單程 ¥660，可刷 Suica / ICOCA）。',
          q: '仙台駅 Sendai Station',
          tag: '通勤'
        },
        {
          id: 'd1-3',
          time: '17:15–17:45',
          title: '仙台東大都會大飯店 Check-in 辦理入住',
          note: '連住兩晚（Day 1–Day 2，NT$7,800）。飯店與 JR 仙台站東口 3 樓直接連通，出剪票口步行 1 分鐘即達，放妥行李後輕鬆出門。',
          q: 'ホテルメトロポリタン仙台イースト Hotel Metropolitan Sendai East',
          tag: '住宿'
        },
        {
          id: 'd1-4',
          time: '18:00–19:30',
          title: '【暫定 TBD】晚餐：仙台站 3F 牛舌通（善治郎／伊達の牛たん／利久）',
          note: 'TBD 暫定推薦行程：於仙台站 3 樓「牛たん通り」享用炭火厚切牛舌定食＋毛豆奶昔（ずんだシェイク），可隨時點鉛筆修改！',
          q: '仙台駅 牛たん通り Gyutan Street Sendai Station'
        },
        {
          id: 'd1-5',
          time: '19:30–21:00',
          title: '【暫定 TBD】AER 31F 免費展望台夜景 ＆ S-PAL 仙台散步',
          note: 'TBD 暫定推薦行程：步行至仙台站旁 AER 大樓 31 樓展望台免費俯瞰仙台璀璨夜景，順道逛 S-PAL 東館買宵夜草莓回飯店。',
          q: 'AER 展望テラス Sendai AER Observation Terrace'
        }
      ]
    },
    {
      dayIndex: 1,
      label: 'Day 2',
      dateStr: '3/28',
      fullDate: '2027-03-28',
      weekday: '週日',
      routeSummary: '仙台東大都會大飯店 ➔ JR 仙石線往松島海岸 ➔ 松島灣遊覽船・五大堂・瑞巖寺 ➔ 定禪寺通・一番町商店街',
      routeJpMap: 'ホテルメトロポリタン仙台イースト · 松島海岸駅 · 松島島巡り観光船 · 五大堂 · 瑞巌寺 · 一番町商店街',
      items: [
        {
          id: 'd2-1',
          time: '09:00–09:45',
          title: '【暫定 TBD】搭 JR 仙石線前往日本三景「松島海岸站」',
          note: 'TBD 暫定推薦：由 JR 仙台站搭乘仙石線至「松島海岸駅」（車程約 40 分鐘，單程 ¥420）。',
          q: '松島海岸駅 Matsushimakaigan Station',
          tag: '通勤'
        },
        {
          id: 'd2-2',
          time: '10:00–12:00',
          title: '【暫定 TBD】松島灣仁王丸遊覽船 ＆ 五大堂・福浦橋漫步',
          note: 'TBD 暫定推薦：搭遊覽船飽覽松島灣 260 座大小島嶼奇景（約 50 分鐘），下船後散步紅橋造訪千年歷史的「五大堂」。',
          q: '松島 五大堂 Godaido Matsushima'
        },
        {
          id: 'd2-3',
          time: '12:00–13:30',
          title: '【暫定 TBD】午餐：松島魚市場海鮮丼 ＆ 炭烤松島牡蠣',
          note: 'TBD 暫定推薦：3 月底正值宮城松島牡蠣肥美季節，推薦品嚐現烤帶殼牡蠣、牡蠣漢堡與三色海鮮丼。',
          q: '松島さかな市場 Matsushima Fish Market'
        },
        {
          id: 'd2-4',
          time: '13:30–15:30',
          title: '【暫定 TBD】國寶瑞巖寺・圓通院庭園 ＆ 觀瀾亭抹茶看海',
          note: 'TBD 暫定推薦：漫步杉木參道造訪伊達政宗菩提寺「瑞巖寺」，並於松島灣畔茶室喝抹茶配毛豆麻糬。',
          q: '瑞巌寺 Zuiganji Temple Matsushima'
        },
        {
          id: 'd2-5',
          time: '16:00–18:00',
          title: '【暫定 TBD】返回仙台市區・一番町 ＆ クリスロード商店街採買',
          note: 'TBD 暫定推薦：搭仙石線返回仙台站，散步逛 Clis Road 與一番町拱廊街（藥妝、生活雜貨、服飾選物）。',
          q: 'ハピナ名掛丁 クリスロード Sendai Shopping Street'
        },
        {
          id: 'd2-6',
          time: '18:30–20:30',
          title: '【暫定 TBD】晚餐：仙台和牛燒肉（米澤牛／仙台牛）➔ 續住仙台東大都會大飯店',
          note: 'TBD 暫定推薦：享用 A5 仙台牛燒肉或仙台名物「芹菜火鍋（せり鍋）」，餐後回仙台東大都會大飯店休息（第 2 晚）。',
          q: '米沢牛焼肉 仔虎 仙台駅前店 Kotora Sendai',
          tag: '住宿'
        }
      ]
    },
    {
      dayIndex: 2,
      label: 'Day 3',
      dateStr: '3/29',
      fullDate: '2027-03-29',
      weekday: '週一',
      routeSummary: '仙台東大都會退房 ➔ JR 仙山線/山形新幹線往大石田 ➔ 轉接駁進銀山溫泉 ➔ 入住「御宿やなだ屋」一泊二食・大正浪漫點燈夜景',
      routeJpMap: '仙台駅 · 山形駅 · 大石田駅 · 銀山温泉 · 御宿 やなだ屋',
      items: [
        {
          id: 'd3-1',
          time: '09:00–10:00',
          title: '仙台東大都會大飯店辦理退房・準備前往銀山溫泉',
          note: '大件行李可先寄宅配或寄放仙台站置物櫃／Day 4 大和ROYNET飯店，帶一晚輕便換洗衣物前往山形銀山溫泉最輕鬆！',
          q: 'ホテルメトロポリタン仙台イースト Hotel Metropolitan Sendai East',
          tag: '住宿'
        },
        {
          id: 'd3-2',
          time: '10:15–12:30',
          title: '【暫定 TBD】搭乘 JR 仙山線＋山形新幹線（或高速巴士）至「大石田站」',
          note: 'TBD 暫定交通路線：由仙台搭 JR 仙山線（或高速巴士）至山形站 ➔ 轉山形新幹線或奧羽本線至「大石田駅」（亦可於大石田站前吃手打蕎麥麵午餐）。',
          q: '大石田駅 Oishida Station Yamagata',
          tag: '通勤'
        },
        {
          id: 'd3-3',
          time: '13:30–14:30',
          title: '【暫定 TBD】大石田站搭乘「御宿やなだ屋」旅館接駁車／銀山路線巴士',
          note: 'TBD 暫定提醒：請務必事先向「御宿やなだ屋」確認大石田站免費迎送巴士預約班次（通常為 13:40 或 15:45 左右，車程約 35 分鐘）。',
          q: '銀山温泉 バス停 Ginzan Onsen Bus Stop',
          tag: '通勤'
        },
        {
          id: 'd3-4',
          time: '15:00–16:30',
          title: '入住銀山溫泉「御宿やなだ屋 (Oyado Yanadaya)」',
          note: '已預訂一晚（NT$15,000）。位於銀山川中心絕佳位置，僅有 4 間客房的溫馨老舖溫泉旅館，辦理入住後換上浴衣準備散步。',
          q: '銀山温泉 御宿 やなだ屋 Yamagata Obanazawa Ginzan Onsen',
          tag: '住宿'
        },
        {
          id: 'd3-5',
          time: '16:30–18:00',
          title: '【暫定 TBD】銀山溫泉街漫步・和樂足湯・野川豆腐屋 ＆ 藍調時刻煤氣燈點燈',
          note: 'TBD 暫定推薦：傍晚 16:30–17:30 是銀山溫泉最夢幻的「藍調時刻（Blue Hour）」，3 月底殘雪與木造旅館瓦斯燈倒映銀山川，猶如神隱少女場景！',
          q: '銀山温泉 街並み Ginzan Onsen Town'
        },
        {
          id: 'd3-6',
          time: '18:00–21:00',
          title: '御宿やなだ屋 享用尾花澤牛會席晚餐 ＆ 源泉掛流溫泉泡湯',
          note: '於館內享用女將精心準備的山形黑毛和牛「尾花澤牛」與在地山菜會席料理，餐後泡 100% 源泉掛流溫泉徹底療癒。',
          q: '銀山温泉 御宿 やなだ屋 Yamagata Obanazawa Ginzan Onsen',
          tag: '住宿'
        }
      ]
    },
    {
      dayIndex: 3,
      label: 'Day 4',
      dateStr: '3/30',
      fullDate: '2027-03-30',
      weekday: '週二',
      routeSummary: '銀山溫泉晨間散步・退房 ➔ 大石田站返回仙台 ➔ 入住大和ROYNET飯店仙台西口 PREMIER ➔ 仙台城跡／定禪寺通',
      routeJpMap: '銀山温泉 御宿 やなだ屋 · 大石田駅 · 仙台駅 · ダイワロイネットホテル仙台西口 PREMIER · 仙台城跡',
      items: [
        {
          id: 'd4-1',
          time: '08:00–10:00',
          title: '御宿やなだ屋 日式早餐・銀山川無人晨景散步・退房',
          note: '早晨沒有一日遊團客，最適合夫妻兩人在靜謐的銀山溫泉木橋拍合照，約 10:00 退房搭乘旅館送迎車回大石田站。',
          q: '銀山温泉 御宿 やなだ屋 Yamagata Obanazawa Ginzan Onsen',
          tag: '住宿'
        },
        {
          id: 'd4-2',
          time: '10:30–13:00',
          title: '【暫定 TBD】由大石田站搭 JR 返回仙台站',
          note: 'TBD 暫定交通：由大石田站搭奧羽本線／山形新幹線至山形站，轉乘仙山線或高速巴士返回 JR 仙台站。',
          q: '仙台駅 Sendai Station',
          tag: '通勤'
        },
        {
          id: 'd4-3',
          time: '13:00–14:00',
          title: '大和ROYNET飯店 仙台西口 PREMIER 寄放行李／辦理入住',
          note: '已預訂第 4 晚（NT$2,800）。位於 JR 仙台站西口步行 4 分鐘（青葉通旁），樓下即有 7-11 與星巴克，逛西口商圈與朝市極為方便！',
          q: 'ダイワロイネットホテル仙台西口 PREMIER Daiwa Roynet Hotel Sendai Nishiguchi Premier',
          tag: '住宿'
        },
        {
          id: 'd4-4',
          time: '14:30–17:30',
          title: '【暫定 TBD】盧葡兒仙台觀光巴士：瑞鳳殿 ＆ 仙台城跡（伊達政宗騎馬像）',
          note: 'TBD 暫定推薦：搭乘復古「るーぷる仙台」巴士造訪桃山建築「瑞鳳殿」與青葉山「仙台城跡」，與伊達政宗騎馬像俯瞰仙台全景。',
          q: '仙台城跡 伊達政宗公騎馬像 Aoba Castle Sendai'
        },
        {
          id: 'd4-5',
          time: '18:00–20:30',
          title: '【暫定 TBD】最後一晚慶祝晚餐：仙台牛舌名店／居酒屋 ＆ PARCO・ドン・キホーテ採買',
          note: 'TBD 暫定推薦：在仙台西口周邊享用極厚牛舌或東北地酒居酒屋，並到驚安殿堂唐吉軻德仙台站西口本店補齊藥妝零食。',
          q: 'ドン・キホーテ 仙台駅西口本店 Don Quijote Sendai West Exit'
        }
      ]
    },
    {
      dayIndex: 4,
      label: 'Day 5',
      dateStr: '3/31',
      fullDate: '2027-03-31',
      weekday: '週三',
      routeSummary: '大和ROYNET仙台西口退房 ➔ 仙台朝市海鮮早餐 ➔ S-PAL 仙台伴手禮採買 ➔ 仙台機場 JX863 平安返台',
      routeJpMap: 'ダイワロイネットホテル仙台西口 PREMIER · 仙台朝市 · エスパル仙台 (S-PAL) · 仙台空港 (JX863)',
      items: [
        {
          id: 'd5-1',
          time: '09:00–10:30',
          title: '【暫定 TBD】仙台朝市巡禮：新鮮海膽生魚片丼・炸可樂餅・當季草莓',
          note: 'TBD 暫定推薦：從大和ROYNET仙台西口步行僅 4 分鐘即達「仙台の台所—仙台朝市」，必吃朝市丼、齊藤惣菜店熱騰騰可樂餅！',
          q: '仙台朝市 Sendai Morning Market'
        },
        {
          id: 'd5-2',
          time: '10:30–11:00',
          title: '大和ROYNET飯店 仙台西口 PREMIER 辦理退房・寄放行李',
          note: '11:00 前完成退房手續，將行李寄放櫃檯後前往仙台車站大樓最後衝刺採買。',
          q: 'ダイワロイネットホテル仙台西口 PREMIER Daiwa Roynet Hotel Sendai Nishiguchi Premier',
          tag: '住宿'
        },
        {
          id: 'd5-3',
          time: '11:00–13:45',
          title: '【暫定 TBD】S-PAL 仙台百貨 B1 伴手禮大採買 ＆ 午餐',
          note: 'TBD 暫定推薦：一次買齊「菓匠三全 萩之月」、「喜久水庵 毛豆麻糬/喜久福」、「阿部蒲鉾店 烤魚板」、「牛舌真空即食包（注意含肉規定，僅可買常溫殺菌軟袋或海鮮類）」。',
          q: 'エスパル仙台 S-PAL Sendai'
        },
        {
          id: 'd5-4',
          time: '14:00–14:40',
          title: '回飯店領取行李 ➔ 搭仙台機場 Access 線前往仙台機場 (SDJ)',
          note: '建議搭乘 14:15–14:35 左右的仙台空港 Access 線班次（車程 17–25 分鐘），於起飛前 2.5 小時抵達仙台國際機場辦理星宇航空報到。',
          q: '仙台空港駅 Sendai Airport Station',
          tag: '通勤'
        },
        {
          id: 'd5-5',
          time: '17:15–20:35',
          title: '返程航班 星宇航空 JX863 起飛返回台灣 (SDJ ➔ TPE)',
          note: '星宇航空 JX863（仙台 SDJ 17:15 起飛 ➔ 桃園 TPE 20:35 抵達，實際時刻依電子機票為準）。逛仙台機場免稅店買最後一波東北限定伴手禮，平安返家！',
          q: '仙台空港 Sendai Airport',
          flight: true,
          tag: '航班'
        }
      ]
    }
  ]
};

window.HANDBOOK_DATA.expenseCategories = [
  { name: '美食', color: '#B0432E' },
  { name: '機票', color: '#26435F' },
  { name: '住宿', color: '#A67C38' },
  { name: '景點/活動', color: '#2E5A44' },
  { name: '交通', color: '#6E5A4F' },
  { name: '購物/伴手禮', color: '#9A5B6E' },
  { name: '網卡/雜支', color: '#4E7268' },
  { name: '其他', color: '#7D7870' }
];

window.HANDBOOK_DATA.defaultExpenses = [
  {
    id: 'exp-init-flights',
    title: '星宇航空 台北⇄仙台來回機票（去程 JX862／回程 JX863）',
    amount: 16500,
    currency: 'TWD',
    category: '機票',
    payer: '老公',
    split: ['老公', '老婆'],
    who: '老公',
    upd: 1760000001000,
    note: '星宇航空 JX862 / JX863（已預訂付款 NTD 16,500）'
  },
  {
    id: 'exp-init-hotel-d1d2',
    title: 'Day 1–2 仙台東大都會大飯店（連住 2 晚）',
    amount: 7800,
    currency: 'TWD',
    category: '住宿',
    payer: '老公',
    split: ['老公', '老婆'],
    who: '老公',
    upd: 1760000002000,
    note: '3/27–3/29 兩晚住宿（ホテルメトロポリタン仙台イースト，JR仙台站東口直通）'
  },
  {
    id: 'exp-init-hotel-d3',
    title: 'Day 3 銀山溫泉 御宿やなだ屋（住宿 1 晚）',
    amount: 15000,
    currency: 'TWD',
    category: '住宿',
    payer: '老公',
    split: ['老公', '老婆'],
    who: '老公',
    upd: 1760000003000,
    note: '3/29–3/30 銀山溫泉一泊二食（銀山温泉 御宿 やなだ屋）'
  },
  {
    id: 'exp-init-hotel-d4',
    title: 'Day 4 大和ROYNET飯店 仙台西口 PREMIER（住宿 1 晚）',
    amount: 2800,
    currency: 'TWD',
    category: '住宿',
    payer: '老公',
    split: ['老公', '老婆'],
    who: '老公',
    upd: 1760000004000,
    note: '3/30–3/31 一晚住宿（ダイワロイネットホテル仙台西口 PREMIER）'
  },
  {
    id: 'exp-init-esim',
    title: '日本東北旅遊 eSIM 網卡（5天）',
    amount: 0,
    currency: 'TWD',
    category: '網卡/雜支',
    payer: '老公',
    split: ['老公', '老婆'],
    who: '老公',
    upd: 1760000005000,
    note: '待購買・點鉛筆即可填入實際金額'
  },
  {
    id: 'exp-init-jrpass',
    title: '東北交通票券（JR Pass／新幹線／仙台空港車票）',
    amount: 0,
    currency: 'TWD',
    category: '交通',
    payer: '老公',
    split: ['老公', '老婆'],
    who: '老公',
    upd: 1760000006000,
    note: '待購買・點鉛筆即可填入實際金額'
  }
];

window.HANDBOOK_DATA.defaultPlaces = [
  {
    id: 'pl-1',
    n: 'たんや善治郎 仙台站 牛舌通店 (Tanya Zenjiro)',
    tags: ['牛舌', '仙台必吃'],
    note: '仙台站 3F 牛舌通超人氣名店，手工鹽味熟成厚切「真中たん」爽脆多汁，附牛尾湯與麥飯。',
    q: 'たんや善治郎 仙台駅 牛たん通り店 Sendai Station'
  },
  {
    id: 'pl-2',
    n: '味太助 本店 (Aji Tasuke)',
    tags: ['牛舌', '仙台必吃'],
    note: '仙台炭烤牛舌發源初代老舖，僅賣牛舌定食與牛尾湯，炭香濃郁道地（近勾當台公園站／一番町）。',
    q: '旨味太助 仙台市青葉区一番町4-4-13'
  },
  {
    id: 'pl-3',
    n: '閣 (Kaku) 電力ビル店／ブランドーム本店',
    tags: ['牛舌', '仙台必吃'],
    note: '榮獲米其林必比登推薦的傳奇牛舌店，外酥內粉嫩多汁，招牌「牛舌刺身／生牛舌」入口即化。',
    q: '牛たん料理 閣 ブランドーム本店 仙台市青葉区一番町3-8-14'
  },
  {
    id: 'pl-4',
    n: '米澤牛燒肉 仔虎 仙台站前店 (Yakiniku Kotora)',
    tags: ['燒肉', '晚餐候選'],
    note: '位於仙台站西口 HERB SENDAI 8F，可一次品嚐頂級米澤牛、仙台牛與山形牛，環境高雅適合夫妻約會晚餐（建議預約）。',
    q: '米沢牛焼肉 仔虎 仙台駅前店 仙台市青葉区中央1-6-1'
  },
  {
    id: 'pl-5',
    n: 'ずんだ茶寮 (Zunda Saryo) 仙台站毛豆奶昔',
    tags: ['甜點', '伴手禮'],
    note: '仙台三大名物之一！香濃香草奶昔融合顆粒感毛豆泥，微甜不膩，出仙台站必喝一杯。',
    q: 'ずんだ茶寮 仙台駅ずんだ小径店 Sendai Station'
  },
  {
    id: 'pl-6',
    n: '松島さかな市場 (松島魚市場) ＆ 牡蠣小屋',
    tags: ['海鮮', '松島'],
    note: '超過 1,500 種海鮮料理，3 月底必吃熱騰騰炭烤松島帶殼牡蠣、松島牡蠣漢堡與特選海鮮丼。',
    q: '松島さかな市場 宮城県宮城郡松島町松島普賢堂4-10'
  },
  {
    id: 'pl-7',
    n: '銀山溫泉 野川とうふや (野川豆腐屋)',
    tags: ['甜點', '銀山溫泉'],
    note: '銀山川足湯旁百年手作豆腐老店，必吃現點現炸的「生揚豆腐（立ち食い豆腐）」與香滑嫩豆腐，泡著足湯享用超幸福。',
    q: '野川とうふや 山形県尾花沢市銀山新畑427'
  },
  {
    id: 'pl-8',
    n: '銀山溫泉 伊豆の華（蕎麥麵＆炸茄子蕎麥）',
    tags: ['拉麵/麵食', '銀山溫泉'],
    note: '銀山溫泉街人氣古民家食堂，招牌「揚げ茄子おろしそば（炸茄子蘿蔔泥尾花澤蕎麥麵）」與溫泉布丁極受好評。',
    q: '伊豆の華 山形県尾花沢市銀山新畑440'
  },
  {
    id: 'pl-9',
    n: '仙台朝市（齊藤惣菜店ころっけや ＆ 朝市海鮮丼）',
    tags: ['海鮮', '景點'],
    note: '距離 Day 4 大和ROYNET飯店西口步行僅 4 分鐘！必吃現炸北海道男爵馬鈴薯可樂餅與超澎湃海鮮生魚片丼。',
    q: '仙台朝市 宮城県仙台市青葉区中央4-3-28'
  },
  {
    id: 'pl-10',
    n: '菓匠三全「萩の月」＆ 喜久水庵「喜久福」',
    tags: ['甜點', '伴手禮'],
    note: 'S-PAL 仙台 B1 必買伴手禮雙冠王：鬆軟蛋糕包覆濃郁卡士達的「萩之月」，以及冷凍生奶油毛豆大福「喜久福」。',
    q: 'エスパル仙台 本館 B1F 仙台おみやげ処'
  },
  {
    id: 'pl-11',
    n: '仙台東大都會大飯店 (Hotel Metropolitan Sendai East)',
    tags: ['住宿'],
    note: 'Day 1–Day 2 下榻飯店（已付 NTD 7,800），JR 仙台站東口 3F 直結，房間寬敞且衛浴乾濕分離。',
    q: 'ホテルメトロポリタン仙台イースト Hotel Metropolitan Sendai East'
  },
  {
    id: 'pl-12',
    n: '銀山溫泉 御宿やなだ屋 (Oyado Yanadaya)',
    tags: ['住宿', '銀山溫泉'],
    note: 'Day 3 下榻溫泉旅館（已付 NTD 15,000），坐落銀山溫泉街核心河畔，一泊二食尾花澤牛會席與源泉掛流湯。',
    q: '銀山温泉 御宿 やなだ屋 Yamagata Obanazawa Ginzan Onsen'
  },
  {
    id: 'pl-13',
    n: '大和ROYNET飯店 仙台西口 PREMIER',
    tags: ['住宿'],
    note: 'Day 4 下榻飯店（已付 NTD 2,800），仙台站西口步行 4 分鐘，近仙台朝市與一番町商圈。',
    q: 'ダイワロイネットホテル仙台西口 PREMIER Daiwa Roynet Hotel Sendai Nishiguchi Premier'
  }
];

window.HANDBOOK_DATA.phraseCards = [
  {
    id: 'c-1',
    cat: '問候',
    jp: 'すみません、ちょっとお聞きしてもいいですか？',
    zh: '不好意思，請問可以請教一下嗎？',
    pron: '斯咪媽線，秋偷 歐ki-ki 希貼摸 いい爹斯咖？'
  },
  {
    id: 'c-2',
    cat: '問候',
    jp: 'ありがとうございます。とても美味しかったです！',
    zh: '非常謝謝您，真的非常好吃！',
    pron: '阿哩嘎偷 勾扎以媽斯。偷貼摸 歐以希卡塔 爹斯！'
  },
  {
    id: 'c-3',
    cat: '點餐',
    jp: '2名（にめい）です。予約（よやく）していません。',
    zh: '我們兩位，沒有預約。請問還有位子嗎？',
    pron: '尼妹 爹斯。優呀哭 希貼 以媽線。'
  },
  {
    id: 'c-4',
    cat: '點餐',
    jp: 'おすすめの厚切り牛たん定食（あつぎりぎゅうたんていしょく）はどれですか？',
    zh: '請問推薦的「厚切牛舌定食」是哪一個？',
    pron: '歐斯斯妹 諾 阿茲gi哩 牛嘆 貼休哭 挖 兜咧爹斯咖？'
  },
  {
    id: 'c-5',
    cat: '點餐',
    jp: 'お水（みず）を2つお願いします。',
    zh: '麻煩給我們兩杯冰水，謝謝。',
    pron: '歐咪茲 歐 夫塔茲 歐內嘎以希媽斯。'
  },
  {
    id: 'c-6',
    cat: '點餐',
    jp: 'お会計（かいけい）をお願いします。カードで払えますか？',
    zh: '麻煩結帳。請問可以刷信用卡嗎？',
    pron: '歐開K 歐 歐內嘎以希媽斯。卡兜 爹 哈拉欸媽斯咖？'
  },
  {
    id: 'c-7',
    cat: '購物',
    jp: '免税（めんぜい）手続きはここでできますか？',
    zh: '請問可以在這邊辦理退稅（免稅）嗎？',
    pron: '免賊 貼茲茲ki 挖 摳摳爹 爹ki媽斯咖？'
  },
  {
    id: 'c-8',
    cat: '購物',
    jp: '常温（じょうおん）で持ち帰れるお土産はどれですか？',
    zh: '請問哪一個是可以「常溫帶回國」的伴手禮？',
    pron: '揪翁 爹 摸七卡欸咧嚕 歐咪呀給 挖 兜咧爹斯咖？'
  },
  {
    id: 'c-9',
    cat: '交通',
    jp: '仙台空港アクセス線の乗り場はどこですか？',
    zh: '請問「仙台機場 Access 線」的搭車月台在哪裡？',
    pron: '先代哭摳 Access 線 諾 諾哩巴 挖 兜摳爹斯咖？'
  },
  {
    id: 'c-10',
    cat: '交通',
    jp: '銀山温泉（ぎんざんおんせん）行きのバス／送迎車乗り場はここですか？',
    zh: '請問往「銀山溫泉」的巴士／接駁車是在這裡搭嗎？',
    pron: '銀山翁線 以ki 諾 巴斯／搜給蝦 諾哩巴 挖 摳摳爹斯咖？'
  },
  {
    id: 'c-11',
    cat: '住宿',
    jp: 'チェックイン前ですが、荷物を預かってもらえますか？',
    zh: '還沒到入住時間，請問可以先寄放行李嗎？',
    pron: 'Check-in 媽欸 爹斯嘎，尼摸茲 歐 阿茲卡貼 摸拉欸媽斯咖？'
  },
  {
    id: 'c-12',
    cat: '住宿',
    jp: '明日の大石田駅（おおいしだえき）までの送迎バスを予約したいです。',
    zh: '我們想預約明天前往「大石田站」的旅館送迎巴士。',
    pron: '阿希塔 諾 歐歐以希達欸ki 媽爹諾 搜給巴斯 歐 優呀哭 希泰爹斯。'
  },
  {
    id: 'c-13',
    cat: '身體不適',
    jp: '風邪薬（かぜぐすり）や胃薬（いぐすり）はどこにありますか？',
    zh: '請問感冒藥或腸胃藥放在哪一區？',
    pron: '卡賊辜斯哩 呀 以辜斯哩 挖 兜摳尼 阿哩媽斯咖？'
  },
  {
    id: 'c-14',
    cat: '身體不適',
    jp: '少し気分が悪いです。ここで少し休んでもいいですか？',
    zh: '我有一點不舒服，請問可以在這裡稍微休息一下嗎？',
    pron: '斯摳希 ki奔 嘎 哇嚕以爹斯。摳摳爹 斯摳希 呀孫爹摸 いい爹斯咖？'
  }
];

window.HANDBOOK_DATA.defaultChecklist = [
  { id: 'chk-1', text: '中華民國護照（效期滿 6 個月以上）' },
  { id: 'chk-2', text: 'Visit Japan Web 入境＆海關 QR Code 截圖' },
  { id: 'chk-3', text: '星宇航空 去程 JX862 ／ 回程 JX863 電子機票（已買 NTD 16,500）' },
  { id: 'chk-4', text: 'Day 1–2 仙台東大都會大飯店 訂房確認單（已訂 NTD 7,800）' },
  { id: 'chk-5', text: 'Day 3 銀山溫泉「御宿やなだ屋」訂房單 ＆ 大石田站接駁預約確認（已訂 NTD 15,000）' },
  { id: 'chk-6', text: 'Day 4 大和ROYNET飯店 仙台西口 PREMIER 訂房確認單（已訂 NTD 2,800）' },
  { id: 'chk-7', text: '日本東北 eSIM 網卡開通綁定' },
  { id: 'chk-8', text: 'JR 東日本車票／Suica 或 ICOCA 儲值準備' },
  { id: 'chk-9', text: '日圓現金（銀山溫泉小店與巴士多收現金）＆ 海外高回饋信用卡' },
  { id: 'chk-10', text: '行動電源（須隨身攜帶不可托運）＆ 充電線' },
  { id: 'chk-11', text: '保暖防風外套、發熱衣、防滑好走的鞋（3月底銀山溫泉仍有殘雪且夜晚約 0°C）' },
  { id: 'chk-12', text: '個人常備藥品（腸胃藥、止痛藥、暈車藥、護唇膏與保濕乳液）' }
];

window.HANDBOOK_DATA.officialLinks = [
  {
    title: '仙台機場 Access 線 時刻表與票價指南',
    sub: '仙台機場 SDJ ⇄ JR 仙台站最快 17 分鐘直達',
    url: 'https://www.senat.co.jp/timetable'
  },
  {
    title: '銀山溫泉「御宿やなだ屋」官方網站',
    sub: '確認一泊二食須知與大石田站接駁資訊',
    url: 'https://www.yanadaya.com/'
  },
  {
    title: '銀山はながさ号（大石田站 ⇄ 銀山溫泉巴士時刻表）',
    sub: '尾花澤市營巴士時刻與票價查詢（單程 ¥1,000）',
    url: 'https://www.hanagasa-bus-taisho.com/ontime/'
  },
  {
    title: '盧葡兒仙台 (Loople Sendai) 觀光巴士路線與時刻表',
    sub: '串聯瑞鳳殿、仙台城跡、大崎八幡宮、定禪寺通',
    url: 'https://loople-sendai.jp/tw/'
  }
];

window.HANDBOOK_DATA.reminders = [
  {
    title: '三間飯店完美銜接＆銀山溫泉輕裝攻略',
    line1: 'Day 1–2「仙台東大都會大飯店」直通仙台站東口 3F；Day 4「大和ROYNET仙台西口 PREMIER」在西口步行 4 分鐘。',
    line2: 'Day 3 前往「銀山溫泉 御宿やなだ屋」強烈建議將大件行李寄放於仙台站或先拿去 Day 4 大和ROYNET寄放，只帶一晚輕便背包搭車去大石田站！'
  },
  {
    title: '星宇 JX862 / JX863 轉乘 ＆ 銀山溫泉接駁提醒',
    line1: '去程 JX862 抵達仙台機場後，走 2F 連通道搭 Access 線約 17–25 分鐘即達仙台站；回程 JX863 請預留 2.5 小時前抵達仙台機場。',
    line2: '銀山溫泉「御宿やなだ屋」如有預約大石田站接駁，請再次核對抵達大石田站的 JR 班次時間；溫泉街小店多僅收日圓現金，記得備妥零錢與千元鈔。'
  }
];

window.HANDBOOK_DATA.emergencyContacts = [
  { name: '日本警察局（緊急報案）', tel: '110', note: '發生事故、遺失物報案' },
  { name: '日本救護車／消防局', tel: '119', note: '急病、受傷需救護車支援' },
  { name: '台北駐日經濟文化代表處（東京本處・轄東北）', tel: '+81-3-3280-7811', note: '急難救助專線：+81-80-1009-7179 ／ +81-80-1009-7436' },
  { name: '外交部旅外國人急難救助專線', tel: '+886-800-085-095', note: '日本當地撥打全球免付費：001-800-0885-0885' },
  { name: '日本政府觀光局 (JNTO) 24小時醫療熱線', tel: '050-3816-2787', note: '提供中文電話口譯與東北就醫指引' }
];

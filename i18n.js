// ═══════════════════════════════════════════════════════════════════
//  AlbionMarketCalc — i18n (Internationalization) System
//  Architecture:
//    - localStorage key: 'amc_lang'  → e.g. 'en', 'ja', 'ko'
//    - localStorage key: 'amc_region' → 'west' | 'east' | 'europe'
//    - API host auto-selected from region
//    - All pages call AMC.init() on load → replaces data-i18n="key" attributes
//    - Language switcher injects into nav automatically
// ═══════════════════════════════════════════════════════════════════

const AMC_I18N = {

  // ── LANGUAGE METADATA ─────────────────────────────────────────────
  languages: {
    en:    { label:'English',            flag:'🇬🇧', region:'west',   rtl:false },
    tr:    { label:'Türkçe',             flag:'🇹🇷', region:'europe', rtl:false },
    ja:    { label:'日本語',              flag:'🇯🇵', region:'east',   rtl:false },
    ko:    { label:'한국어',              flag:'🇰🇷', region:'east',   rtl:false },
    'zh-CN':{ label:'简体中文',           flag:'🇨🇳', region:'east',   rtl:false },
    'zh-TW':{ label:'繁體中文',           flag:'🇹🇼', region:'east',   rtl:false },
    vi:    { label:'Tiếng Việt',         flag:'🇻🇳', region:'east',   rtl:false },
    id:    { label:'Bahasa Indonesia',   flag:'🇮🇩', region:'east',   rtl:false },
    th:    { label:'ภาษาไทย',            flag:'🇹🇭', region:'east',   rtl:false },
    de:    { label:'Deutsch',            flag:'🇩🇪', region:'europe', rtl:false },
    fr:    { label:'Français',           flag:'🇫🇷', region:'europe', rtl:false },
    es:    { label:'Español',            flag:'🇪🇸', region:'west',   rtl:false },
    pt:    { label:'Português',          flag:'🇧🇷', region:'west',   rtl:false },
  },

  // ── API HOSTS BY REGION ────────────────────────────────────────────
  apiHosts: {
    west:   ['https://west.albion-online-data.com','https://europe.albion-online-data.com'],
    europe: ['https://europe.albion-online-data.com','https://west.albion-online-data.com'],
    east:   ['https://east.albion-online-data.com','https://europe.albion-online-data.com'],
  },

  // ── TRANSLATIONS ───────────────────────────────────────────────────
  // Key format: 'section.key'
  // Usage in HTML: <span data-i18n="nav.home">Home</span>
  translations: {

    // ── NAV ──────────────────────────────────────────────────────────
    'nav.home':         { en:'Home',        tr:'Ana Sayfa',   ja:'ホーム',      ko:'홈',         'zh-CN':'首页',    'zh-TW':'首頁',    vi:'Trang Chủ',    id:'Beranda',      th:'หน้าหลัก',  de:'Startseite',   fr:'Accueil',     es:'Inicio',     pt:'Início'    },
    'nav.market':       { en:'Market',      tr:'Pazar',       ja:'マーケット',  ko:'시장',        'zh-CN':'市场',    'zh-TW':'市場',    vi:'Thị Trường',   id:'Pasar',        th:'ตลาด',       de:'Markt',        fr:'Marché',      es:'Mercado',    pt:'Mercado'   },
    'nav.flip':         { en:'Flip Finder', tr:'Flip Bulucu', ja:'フリップ検索', ko:'플립 파인더', 'zh-CN':'搬砖助手','zh-TW':'搬磚助手', vi:'Tìm Flip',     id:'Pencari Flip', th:'ค้นหาFlip',  de:'Flip Finder',  fr:'Flip Finder', es:'Flip Finder',pt:'Flip Finder'},
    'nav.calc':         { en:'⚖ Calculator',tr:'⚖ Hesap',    ja:'⚖ 計算機',   ko:'⚖ 계산기',   'zh-CN':'⚖ 计算器','zh-TW':'⚖ 計算器', vi:'⚖ Tính Toán', id:'⚖ Kalkulator', th:'⚖ คำนวณ',    de:'⚖ Rechner',   fr:'⚖ Calculateur',es:'⚖ Calculadora',pt:'⚖ Calculadora'},
    'nav.craft':        { en:'🔥 Best Craft',tr:'🔥 En İyi Craft',ja:'🔥 最適クラフト',ko:'🔥 최고 제작','zh-CN':'🔥 最佳制作','zh-TW':'🔥 最佳製作',vi:'🔥 Craft Tốt Nhất',id:'🔥 Craft Terbaik',th:'🔥 คราฟต์ดีสุด',de:'🔥 Bestes Craft',fr:'🔥 Meilleur Craft',es:'🔥 Mejor Craft',pt:'🔥 Melhor Craft'},

    // ── COMMON BUTTONS ────────────────────────────────────────────────
    'btn.scan':         { en:'⚡ Scan Flips',  tr:'⚡ Flipi Tara', ja:'⚡ フリップ検索',ko:'⚡ 플립 스캔','zh-CN':'⚡ 扫描翻转','zh-TW':'⚡ 掃描翻轉',vi:'⚡ Quét Flip',   id:'⚡ Pindai Flip',th:'⚡ สแกนFlip',   de:'⚡ Flipps suchen',fr:'⚡ Scanner',  es:'⚡ Escanear', pt:'⚡ Escanear' },
    'btn.scan_again':   { en:'⚡ Scan Again',  tr:'⚡ Tekrar Tara',ja:'⚡ 再検索',     ko:'⚡ 다시 스캔','zh-CN':'⚡ 重新扫描','zh-TW':'⚡ 重新掃描',vi:'⚡ Quét Lại',   id:'⚡ Pindai Lagi',th:'⚡ สแกนอีกครั้ง',de:'⚡ Erneut',    fr:'⚡ Rescanner',es:'⚡ Reescanear',pt:'⚡ Reescanear'},
    'btn.scan_crafts':  { en:'🔥 Scan Crafts', tr:'🔥 Craftları Tara',ja:'🔥 クラフト検索',ko:'🔥 제작 스캔','zh-CN':'🔥 扫描制作','zh-TW':'🔥 掃描製作',vi:'🔥 Quét Craft', id:'🔥 Pindai Craft',th:'🔥 สแกนCraft',  de:'🔥 Crafts suchen',fr:'🔥 Analyser', es:'🔥 Analizar', pt:'🔥 Analisar' },
    'btn.calculate':    { en:'⚖ Calculate Profit',tr:'⚖ Kar Hesapla',ja:'⚖ 利益計算',  ko:'⚖ 수익 계산','zh-CN':'⚖ 计算利润','zh-TW':'⚖ 計算利潤',vi:'⚖ Tính Lợi Nhuận',id:'⚖ Hitung Untung',th:'⚖ คำนวณกำไร',de:'⚖ Gewinn berechnen',fr:'⚖ Calculer',es:'⚖ Calcular',pt:'⚖ Calcular' },
    'btn.refresh':      { en:'⟳ Refresh',     tr:'⟳ Yenile',     ja:'⟳ 更新',      ko:'⟳ 새로고침',  'zh-CN':'⟳ 刷新',    'zh-TW':'⟳ 刷新',    vi:'⟳ Làm Mới',    id:'⟳ Refresh',    th:'⟳ รีเฟรช',    de:'⟳ Aktualisieren',fr:'⟳ Actualiser',es:'⟳ Actualizar',pt:'⟳ Atualizar'},
    'btn.accept':       { en:'✓ Accept All',  tr:'✓ Tümünü Kabul Et',ja:'✓ すべて許可',ko:'✓ 모두 수락','zh-CN':'✓ 全部接受','zh-TW':'✓ 全部接受',vi:'✓ Chấp Nhận',   id:'✓ Terima Semua',th:'✓ ยอมรับทั้งหมด',de:'✓ Alle akzeptieren',fr:'✓ Tout accepter',es:'✓ Aceptar todo',pt:'✓ Aceitar tudo'},
    'btn.essential_only':{ en:'Essential Only',tr:'Yalnızca Gerekli',ja:'必要なもののみ',ko:'필수만',   'zh-CN':'仅必要',    'zh-TW':'僅必要',    vi:'Chỉ Cần Thiết', id:'Hanya Esensial', th:'เฉพาะสำคัญ',de:'Nur Notwendige',fr:'Essentiel seulement',es:'Solo esencial',pt:'Apenas essencial'},

    // ── FLIP FINDER ───────────────────────────────────────────────────
    'flip.title':       { en:'◈ Flip Finder',      tr:'◈ Flip Bulucu',     ja:'◈ フリップ検索',      ko:'◈ 플립 파인더',       'zh-CN':'◈ 搬砖助手',        'zh-TW':'◈ 搬磚助手',         vi:'◈ Tìm Flip',           id:'◈ Pencari Flip',        th:'◈ ค้นหา Flip'     },
    'flip.desc':        { en:'Buy cheap in one city, sell high in another.', tr:'Bir şehirde ucuza al, diğerinde pahalıya sat.',ja:'ある都市で安く買い、別の都市で高く売る。',ko:'한 도시에서 싸게 사서 다른 도시에서 비싸게 팔기.',  'zh-CN':'在一个城市低价购买，在另一个城市高价出售。','zh-TW':'在一個城市低價購買，在另一個城市高價出售。',vi:'Mua rẻ ở một thành phố, bán đắt ở thành phố khác.',id:'Beli murah di satu kota, jual mahal di kota lain.',th:'ซื้อถูกในเมืองหนึ่ง ขายแพงในอีกเมืองหนึ่ง' },
    'flip.category':    { en:'Category:',          tr:'Kategori:',          ja:'カテゴリー:',          ko:'카테고리:',            'zh-CN':'类别:',             'zh-TW':'類別:',              vi:'Danh Mục:',            id:'Kategori:',             th:'หมวดหมู่:'        },
    'flip.min_profit':  { en:'Min Profit %:',      tr:'Min Kar %:',         ja:'最低利益 %:',          ko:'최소 수익 %:',         'zh-CN':'最低利润 %:',        'zh-TW':'最低利潤 %:',         vi:'Lợi Nhuận Tối Thiểu:', id:'Min Keuntungan %:',     th:'กำไรขั้นต่ำ %:'   },
    'flip.sort':        { en:'Sort:',              tr:'Sırala:',            ja:'並び替え:',            ko:'정렬:',                'zh-CN':'排序:',             'zh-TW':'排序:',              vi:'Sắp Xếp:',             id:'Urutkan:',              th:'เรียงลำดับ:'      },
    'flip.tax':         { en:'Market Tax:',        tr:'Pazar Vergisi:',     ja:'取引税:',              ko:'시장 세금:',            'zh-CN':'市场税:',            'zh-TW':'市場稅:',             vi:'Thuế Thị Trường:',     id:'Pajak Pasar:',          th:'ภาษีตลาด:'        },
    'flip.route':       { en:'Route',              tr:'Güzergah',           ja:'ルート',               ko:'경로',                  'zh-CN':'路线',              'zh-TW':'路線',               vi:'Tuyến Đường',          id:'Rute',                  th:'เส้นทาง'          },
    'flip.buy_price':   { en:'Buy Price',          tr:'Alış Fiyatı',        ja:'購入価格',             ko:'구매 가격',             'zh-CN':'购买价格',           'zh-TW':'購買價格',            vi:'Giá Mua',              id:'Harga Beli',            th:'ราคาซื้อ'          },
    'flip.sell_price':  { en:'Sell Price (Net)',   tr:'Satış Fiyatı (Net)', ja:'売却価格 (手取り)',     ko:'판매 가격 (순)',          'zh-CN':'卖出价格（净）',      'zh-TW':'賣出價格（淨）',       vi:'Giá Bán (Thực)',       id:'Harga Jual (Bersih)',   th:'ราคาขาย (สุทธิ)'  },
    'flip.profit':      { en:'Profit',             tr:'Kar',                ja:'利益',                 ko:'수익',                  'zh-CN':'利润',              'zh-TW':'利潤',               vi:'Lợi Nhuận',            id:'Keuntungan',            th:'กำไร'              },
    'flip.no_results':  { en:'No flips found. Try lowering the minimum.',tr:'Flip bulunamadı. Minimumu düşürmeyi deneyin.',ja:'フリップが見つかりません。最低値を下げてみてください。',ko:'플립을 찾을 수 없습니다. 최솟값을 낮춰보세요.',  'zh-CN':'未找到翻转机会，请降低最低利润。','zh-TW':'未找到翻轉機會，請降低最低利潤。',vi:'Không tìm thấy flip. Thử hạ mức tối thiểu.',id:'Tidak ada flip. Coba turunkan minimal.',th:'ไม่พบ Flip ลองลดขั้นต่ำ' },

    // ── CRAFT ─────────────────────────────────────────────────────────
    'craft.title':      { en:'🔥 Best Craft Today', tr:'🔥 Bugünün En İyi Crafti', ja:'🔥 今日の最適クラフト',ko:'🔥 오늘의 최고 제작', 'zh-CN':'🔥 今日最佳制作', 'zh-TW':'🔥 今日最佳製作', vi:'🔥 Craft Tốt Nhất Hôm Nay',id:'🔥 Craft Terbaik Hari Ini',th:'🔥 คราฟต์ดีที่สุดวันนี้'},
    'craft.desc':       { en:'Live material cost vs. sell price. Ranked by profit margin.', tr:'Canlı malzeme maliyeti vs satış fiyatı. Kar marjına göre sıralı.',ja:'材料コストと売却価格のライブ比較。利益率でランキング。',ko:'실시간 재료비 대 판매가. 수익 마진별 순위.',  'zh-CN':'实时材料成本对比售价，按利润率排名。','zh-TW':'即時材料成本對比售價，按利潤率排名。',vi:'Chi phí nguyên liệu thực tế so với giá bán. Xếp hạng theo lợi nhuận.',id:'Biaya material real-time vs harga jual. Diurutkan berdasarkan margin.',th:'ต้นทุนวัสดุเทียบกับราคาขายแบบเรียลไทม์ จัดอันดับตามกำไร'},
    'craft.city':       { en:'City:',              tr:'Şehir:',             ja:'都市:',                ko:'도시:',                 'zh-CN':'城市:',             'zh-TW':'城市:',              vi:'Thành Phố:',           id:'Kota:',                 th:'เมือง:'           },
    'craft.category':   { en:'Category:',          tr:'Kategori:',          ja:'カテゴリー:',          ko:'카테고리:',             'zh-CN':'类别:',             'zh-TW':'類別:',              vi:'Danh Mục:',            id:'Kategori:',             th:'หมวดหมู่:'        },
    'craft.tier':       { en:'Tier:',              tr:'Seviye:',            ja:'ティア:',              ko:'티어:',                 'zh-CN':'等级:',             'zh-TW':'等級:',              vi:'Bậc:',                 id:'Tier:',                 th:'เทียร์:'          },
    'craft.return':     { en:'Return Rate:',       tr:'Geri Dönüş Oranı:',  ja:'リターン率:',          ko:'회수율:',               'zh-CN':'返还率:',            'zh-TW':'返還率:',             vi:'Tỷ Lệ Hoàn Trả:',     id:'Tingkat Pengembalian:', th:'อัตราคืนวัสดุ:'   },
    'craft.mat_cost':   { en:'Mat Cost',           tr:'Malzeme Maliyeti',   ja:'素材コスト',           ko:'재료 비용',              'zh-CN':'材料成本',           'zh-TW':'材料成本',            vi:'Chi Phí Nguyên Liệu',  id:'Biaya Material',        th:'ต้นทุนวัสดุ'       },
    'craft.sell_net':   { en:'Sell (Net)',          tr:'Satış (Net)',         ja:'売却（手取り）',        ko:'판매 (순)',              'zh-CN':'卖出（净）',          'zh-TW':'賣出（淨）',           vi:'Bán (Thực)',            id:'Jual (Bersih)',          th:'ขาย (สุทธิ)'       },
    'craft.profit':     { en:'Profit',             tr:'Kar',                ja:'利益',                 ko:'수익',                  'zh-CN':'利润',              'zh-TW':'利潤',               vi:'Lợi Nhuận',            id:'Keuntungan',            th:'กำไร'              },
    'craft.materials':  { en:'Materials',          tr:'Malzemeler',         ja:'素材',                 ko:'재료',                  'zh-CN':'材料',              'zh-TW':'材料',               vi:'Nguyên Liệu',          id:'Material',              th:'วัสดุ'             },
    'craft.best_right_now':{ en:'Best Craft Right Now', tr:'Şu Anki En İyi Craft', ja:'今最適なクラフト', ko:'지금 최고 제작',      'zh-CN':'当前最佳制作',        'zh-TW':'當前最佳製作',         vi:'Craft Tốt Nhất Hiện Tại',id:'Craft Terbaik Saat Ini',th:'คราฟต์ดีที่สุดตอนนี้'},

    // ── CALCULATOR ────────────────────────────────────────────────────
    'calc.title':       { en:'⚖ Market Calculator', tr:'⚖ Pazar Hesaplayıcı', ja:'⚖ マーケット計算機', ko:'⚖ 시장 계산기',       'zh-CN':'⚖ 市场计算器',      'zh-TW':'⚖ 市場計算器',       vi:'⚖ Máy Tính Thị Trường', id:'⚖ Kalkulator Pasar',   th:'⚖ เครื่องคำนวณตลาด'},
    'calc.buy_price':   { en:'Buy Price',           tr:'Alış Fiyatı',        ja:'購入価格',            ko:'구매 가격',             'zh-CN':'购买价格',           'zh-TW':'購買價格',            vi:'Giá Mua',              id:'Harga Beli',            th:'ราคาซื้อ'          },
    'calc.sell_price':  { en:'Sell Price',          tr:'Satış Fiyatı',       ja:'売却価格',            ko:'판매 가격',             'zh-CN':'卖出价格',           'zh-TW':'賣出價格',            vi:'Giá Bán',              id:'Harga Jual',            th:'ราคาขาย'           },
    'calc.quantity':    { en:'Quantity',            tr:'Miktar',             ja:'数量',                ko:'수량',                  'zh-CN':'数量',              'zh-TW':'數量',               vi:'Số Lượng',             id:'Jumlah',                th:'จำนวน'             },
    'calc.tax':         { en:'Market Tax:',         tr:'Pazar Vergisi:',     ja:'取引税:',             ko:'시장 세금:',             'zh-CN':'市场税:',            'zh-TW':'市場稅:',             vi:'Thuế Thị Trường:',     id:'Pajak Pasar:',          th:'ภาษีตลาด:'        },
    'calc.net_profit':  { en:'Net Profit',          tr:'Net Kar',            ja:'純利益',              ko:'순 수익',               'zh-CN':'净利润',             'zh-TW':'淨利潤',              vi:'Lợi Nhuận Ròng',       id:'Keuntungan Bersih',     th:'กำไรสุทธิ'         },
    'calc.roi':         { en:'ROI',                 tr:'Yatırım Getirisi',   ja:'投資利益率',           ko:'투자 수익률',             'zh-CN':'投资回报率',          'zh-TW':'投資回報率',           vi:'ROI',                  id:'ROI',                   th:'ROI'              },

    // ── MARKET ────────────────────────────────────────────────────────
    'market.title':     { en:'Market Browser',      tr:'Pazar Tarayıcısı',  ja:'マーケット一覧',       ko:'시장 브라우저',          'zh-CN':'市场浏览器',          'zh-TW':'市場瀏覽器',           vi:'Trình Duyệt Thị Trường',id:'Browser Pasar',        th:'เบราว์เซอร์ตลาด'  },
    'market.desc':      { en:'Live prices across all 6 cities.',tr:'6 şehirde canlı fiyatlar.',ja:'全6都市のライブ価格。',ko:'6개 도시 실시간 가격.',  'zh-CN':'全6城市实时价格。',   'zh-TW':'全6城市即時價格。',    vi:'Giá thực tế ở 6 thành phố.',id:'Harga live di 6 kota.',th:'ราคาสดใน 6 เมือง'  },
    'market.filter_cat':{ en:'Category',            tr:'Kategori',           ja:'カテゴリー',           ko:'카테고리',               'zh-CN':'类别',              'zh-TW':'類別',               vi:'Danh Mục',             id:'Kategori',              th:'หมวดหมู่'          },
    'market.filter_tier':{ en:'Tier',               tr:'Seviye',             ja:'ティア',               ko:'티어',                  'zh-CN':'等级',              'zh-TW':'等級',               vi:'Bậc',                  id:'Tier',                  th:'เทียร์'           },

    // ── COMMON UI ─────────────────────────────────────────────────────
    'ui.loading':       { en:'Loading...',          tr:'Yükleniyor...',      ja:'読み込み中...',         ko:'로딩 중...',             'zh-CN':'加载中...',          'zh-TW':'載入中...',           vi:'Đang Tải...',           id:'Memuat...',             th:'กำลังโหลด...'     },
    'ui.no_data':       { en:'No data available.',  tr:'Veri mevcut değil.', ja:'データがありません。', ko:'데이터 없음.',            'zh-CN':'无数据。',           'zh-TW':'無數據。',            vi:'Không có dữ liệu.',    id:'Tidak ada data.',       th:'ไม่มีข้อมูล'       },
    'ui.all_items':     { en:'All Items',           tr:'Tüm Öğeler',         ja:'すべてのアイテム',     ko:'모든 아이템',              'zh-CN':'所有物品',           'zh-TW':'所有物品',            vi:'Tất Cả Vật Phẩm',     id:'Semua Item',            th:'ทุกไอเทม'          },
    'ui.all_tiers':     { en:'All Tiers',           tr:'Tüm Seviyeler',      ja:'全ティア',             ko:'모든 티어',               'zh-CN':'所有等级',           'zh-TW':'所有等級',            vi:'Tất Cả Bậc',           id:'Semua Tier',            th:'ทุกเทียร์'         },
    'ui.item':          { en:'Item',                tr:'Öğe',                ja:'アイテム',             ko:'아이템',                  'zh-CN':'物品',              'zh-TW':'物品',               vi:'Vật Phẩm',             id:'Item',                  th:'ไอเทม'            },
    'ui.region':        { en:'Region:',             tr:'Sunucu Bölgesi:',    ja:'サーバー地域:',         ko:'서버 지역:',               'zh-CN':'服务器区域:',         'zh-TW':'伺服器區域:',          vi:'Khu Vực:',             id:'Region:',               th:'ภูมิภาค:'         },
    'ui.west':          { en:'West EU',             tr:'Batı AB',            ja:'西ヨーロッパ',         ko:'서유럽',                  'zh-CN':'西欧',              'zh-TW':'西歐',               vi:'Tây EU',               id:'Eropa Barat',           th:'ยุโรปตะวันตก'      },
    'ui.europe':        { en:'Europe',              tr:'Avrupa',             ja:'ヨーロッパ',           ko:'유럽',                   'zh-CN':'欧洲',              'zh-TW':'歐洲',               vi:'Châu Âu',              id:'Eropa',                 th:'ยุโรป'            },
    'ui.east':          { en:'East (Asia)',         tr:'Doğu (Asya)',        ja:'東（アジア）',         ko:'동부 (아시아)',             'zh-CN':'东方（亚洲）',        'zh-TW':'東方（亞洲）',          vi:'Đông (Châu Á)',        id:'Timur (Asia)',           th:'ตะวันออก (เอเชีย)' },
    'ui.profit_pct':    { en:'Profit %',            tr:'Kar %',              ja:'利益 %',               ko:'수익 %',                  'zh-CN':'利润 %',             'zh-TW':'利潤 %',              vi:'Lợi Nhuận %',          id:'Keuntungan %',          th:'กำไร %'           },
    'ui.profit_silver': { en:'Profit Silver',       tr:'Kar (Silver)',       ja:'利益 (シルバー)',       ko:'수익 (실버)',               'zh-CN':'利润（银币）',         'zh-TW':'利潤（銀幣）',          vi:'Lợi Nhuận (Bạc)',      id:'Keuntungan (Silver)',   th:'กำไร (ซิลเวอร์)' },

    // ── COOKIE ───────────────────────────────────────────────────────
    'cookie.title':     { en:'We use cookies',     tr:'Çerez kullanıyoruz', ja:'Cookieを使用しています',ko:'쿠키를 사용합니다',      'zh-CN':'我们使用Cookie',     'zh-TW':'我們使用Cookie',      vi:'Chúng tôi dùng Cookie',id:'Kami menggunakan Cookie',th:'เราใช้คุกกี้'      },
    'cookie.accept':    { en:'✓ Accept All',       tr:'✓ Tümünü Kabul Et',  ja:'✓ すべて許可',         ko:'✓ 모두 수락',              'zh-CN':'✓ 全部接受',         'zh-TW':'✓ 全部接受',          vi:'✓ Chấp Nhận Tất Cả',   id:'✓ Terima Semua',        th:'✓ ยอมรับทั้งหมด'  },
    'cookie.essential': { en:'Essential Only',     tr:'Yalnızca Gerekli',   ja:'必要なもののみ',        ko:'필수만',                  'zh-CN':'仅必要项',           'zh-TW':'僅必要項',            vi:'Chỉ Cần Thiết',        id:'Hanya Esensial',        th:'เฉพาะจำเป็น'      },

    // ── FOOTER ───────────────────────────────────────────────────────
    'footer.disclaimer':{ en:'Not affiliated with Sandbox Interactive GmbH', tr:'Sandbox Interactive GmbH ile bağlantılı değildir', ja:'Sandbox Interactive GmbHとは無関係です', ko:'Sandbox Interactive GmbH와 무관합니다', 'zh-CN':'与Sandbox Interactive GmbH无关', 'zh-TW':'與Sandbox Interactive GmbH無關', vi:'Không liên kết với Sandbox Interactive GmbH', id:'Tidak berafiliasi dengan Sandbox Interactive GmbH', th:'ไม่เกี่ยวข้องกับ Sandbox Interactive GmbH'},
    'footer.about':     { en:'About',              tr:'Hakkında',           ja:'このサイトについて',    ko:'소개',                   'zh-CN':'关于',              'zh-TW':'關於',               vi:'Giới Thiệu',           id:'Tentang',               th:'เกี่ยวกับ'          },
    'footer.privacy':   { en:'Privacy Policy',     tr:'Gizlilik Politikası',ja:'プライバシーポリシー',  ko:'개인정보처리방침',          'zh-CN':'隐私政策',           'zh-TW':'隱私政策',            vi:'Chính Sách Riêng Tư', id:'Kebijakan Privasi',     th:'นโยบายความเป็นส่วนตัว'},
    'footer.contact':   { en:'Contact',            tr:'İletişim',           ja:'お問い合わせ',          ko:'연락처',                  'zh-CN':'联系我们',           'zh-TW':'聯繫我們',            vi:'Liên Hệ',              id:'Kontak',                th:'ติดต่อ'            },

    // ── SELECT OPTIONS (common) ───────────────────────────────────────
    'opt.all_crafts':   { en:'All Crafts',         tr:'Tüm Craftlar',       ja:'全クラフト',           ko:'모든 제작',               'zh-CN':'所有制作',           'zh-TW':'所有製作',            vi:'Tất Cả Craft',         id:'Semua Craft',           th:'ทุกCraft'          },
    'opt.weapons':      { en:'Weapons',            tr:'Silahlar',           ja:'武器',                 ko:'무기',                   'zh-CN':'武器',              'zh-TW':'武器',               vi:'Vũ Khí',               id:'Senjata',               th:'อาวุธ'             },
    'opt.armor':        { en:'Armor',              tr:'Zırh',               ja:'防具',                 ko:'갑옷',                   'zh-CN':'护甲',              'zh-TW':'護甲',               vi:'Giáp',                 id:'Baju Besi',             th:'เกราะ'             },
    'opt.resources':    { en:'Resources',          tr:'Kaynaklar',          ja:'資源',                 ko:'자원',                   'zh-CN':'资源',              'zh-TW':'資源',               vi:'Tài Nguyên',           id:'Sumber Daya',           th:'ทรัพยากร'          },
    'opt.artifacts':    { en:'Artifacts',          tr:'Eserler',            ja:'アーティファクト',     ko:'아티팩트',                 'zh-CN':'神器',              'zh-TW':'神器',               vi:'Hiện Vật',             id:'Artefak',               th:'อาร์ติแฟกต์'       },
    'opt.mounts':       { en:'Mounts',             tr:'Binekler',           ja:'マウント',             ko:'탈것',                   'zh-CN':'坐骑',              'zh-TW':'坐騎',               vi:'Cưỡi',                 id:'Tunggangan',            th:'พาหนะ'             },
    'opt.misc':         { en:'Misc',               tr:'Diğer',              ja:'その他',               ko:'기타',                   'zh-CN':'其他',              'zh-TW':'其他',               vi:'Khác',                 id:'Lainnya',               th:'อื่นๆ'             },
    'opt.no_focus':     { en:'No Focus (0% return)',tr:'Focus Yok (0% geri)',ja:'フォーカスなし (0%)', ko:'포커스 없음 (0%)',         'zh-CN':'无专注 (0%返还)',     'zh-TW':'無專注 (0%返還)',      vi:'Không Focus (0%)',     id:'Tanpa Focus (0%)',      th:'ไม่ใช้ Focus (0%)'},
    'opt.city_station': { en:'City Station (~15%)',tr:'Şehir İstasyonu (~15%)',ja:'都市ステ (~15%)',  ko:'도시 스테이션 (~15%)',     'zh-CN':'城市站 (~15%)',       'zh-TW':'城市站 (~15%)',        vi:'Trạm Thành Phố (~15%)',id:'Stasiun Kota (~15%)',   th:'สถานีเมือง (~15%)'},
    'opt.full_focus':   { en:'Full Focus (~36%)',  tr:'Tam Focus (~36%)',   ja:'フルフォーカス (~36%)',ko:'풀 포커스 (~36%)',         'zh-CN':'全专注 (~36%)',       'zh-TW':'全專注 (~36%)',        vi:'Full Focus (~36%)',    id:'Focus Penuh (~36%)',    th:'Focus เต็ม (~36%)'},
  }
};

// ═══════════════════════════════════════════════════════════════════
//  AMC — Main i18n Controller
// ═══════════════════════════════════════════════════════════════════
window.AMC = {

  // Current state
  lang:   localStorage.getItem('amc_lang')   || detectBrowserLang(),
  region: localStorage.getItem('amc_region') || null,  // null = auto from lang

  // Get API hosts for current region
  getApiHosts() {
    const langMeta = AMC_I18N.languages[this.lang] || AMC_I18N.languages['en'];
    const region = this.region || langMeta.region;
    return AMC_I18N.apiHosts[region] || AMC_I18N.apiHosts['west'];
  },

  // Translate a key, fallback to English, then to key itself
  t(key) {
    const map = AMC_I18N.translations[key];
    if(!map) return key;
    return map[this.lang] || map['en'] || key;
  },

  // Apply translations to entire document
  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translated = this.t(key);
      if(translated && translated !== key) {
        // Preserve child elements (icons etc) if present
        if(el.children.length === 0) {
          el.textContent = translated;
        } else {
          // Only update text nodes
          el.childNodes.forEach(node => {
            if(node.nodeType === 3 && node.textContent.trim()) {
              node.textContent = translated;
            }
          });
        }
      }
    });
    // Apply placeholder translations
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.getAttribute('data-i18n-placeholder'));
    });
    // Update html lang attribute
    document.documentElement.lang = this.lang;
  },

  // Switch language and reload
  setLang(code) {
    const meta = AMC_I18N.languages[code];
    if(!meta) return;
    localStorage.setItem('amc_lang', code);
    // Auto-update region if not manually overridden
    if(!localStorage.getItem('amc_region_manual')) {
      localStorage.setItem('amc_region', meta.region);
      this.region = meta.region;
    }
    this.lang = code;
    this.applyTranslations();
    this.updateSwitcher();
    // Dispatch event so pages can re-fetch with new API host
    window.dispatchEvent(new CustomEvent('amc:langchange', { detail: { lang: code, region: meta.region } }));
  },

  // Override region manually
  setRegion(region) {
    localStorage.setItem('amc_region', region);
    localStorage.setItem('amc_region_manual', '1');
    this.region = region;
    window.dispatchEvent(new CustomEvent('amc:regionchange', { detail: { region } }));
  },

  // Inject language switcher into nav
  injectSwitcher() {
    const nav = document.querySelector('nav');
    if(!nav || document.getElementById('amc-lang-switcher')) return;

    const switcher = document.createElement('div');
    switcher.id = 'amc-lang-switcher';
    switcher.innerHTML = `
      <button class="lang-btn" id="langBtn" onclick="AMC.toggleDropdown()" aria-label="Language">
        <span id="langFlag">${AMC_I18N.languages[this.lang]?.flag || '🌐'}</span>
        <span id="langCode">${this.lang.toUpperCase()}</span>
        <span class="lang-chevron">▾</span>
      </button>
      <div class="lang-dropdown" id="langDropdown">
        <div class="lang-group-label">🌏 Asian Servers</div>
        ${this.renderLangGroup(['ja','ko','zh-CN','zh-TW','vi','id','th'])}
        <div class="lang-divider"></div>
        <div class="lang-group-label">🌍 European Servers</div>
        ${this.renderLangGroup(['en','tr','de','fr'])}
        <div class="lang-divider"></div>
        <div class="lang-group-label">🌎 Americas/West</div>
        ${this.renderLangGroup(['es','pt'])}
        <div class="lang-divider"></div>
        <div class="lang-group-label" style="font-size:9px;opacity:.6">Manual Server Override</div>
        <div class="lang-region-row">
          <button class="region-btn ${this.region==='west'?'active':''}" onclick="AMC.setRegion('west')">West EU</button>
          <button class="region-btn ${this.region==='europe'?'active':''}" onclick="AMC.setRegion('europe')">Europe</button>
          <button class="region-btn ${this.region==='east'?'active':''}" onclick="AMC.setRegion('east')">East</button>
        </div>
      </div>
    `;
    nav.appendChild(switcher);

    // Close on outside click
    document.addEventListener('click', e => {
      if(!switcher.contains(e.target)) {
        document.getElementById('langDropdown')?.classList.remove('open');
      }
    });
  },

  renderLangGroup(codes) {
    return codes.map(code => {
      const meta = AMC_I18N.languages[code];
      if(!meta) return '';
      const active = code === this.lang ? 'active' : '';
      return `<button class="lang-option ${active}" onclick="AMC.setLang('${code}');AMC.closeDropdown()">
        <span class="lang-flag">${meta.flag}</span>
        <span class="lang-label">${meta.label}</span>
        <span class="lang-server" style="font-size:8px;opacity:.5">${meta.region}</span>
      </button>`;
    }).join('');
  },

  toggleDropdown() {
    document.getElementById('langDropdown').classList.toggle('open');
  },
  closeDropdown() {
    document.getElementById('langDropdown').classList.remove('open');
  },
  updateSwitcher() {
    const flag = document.getElementById('langFlag');
    const code = document.getElementById('langCode');
    if(flag) flag.textContent = AMC_I18N.languages[this.lang]?.flag || '🌐';
    if(code) code.textContent = this.lang.toUpperCase();
    // Update active states
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('onclick')?.includes(`'${this.lang}'`));
    });
  },

  // Main init — call on every page
  init() {
    this.region = this.region || (AMC_I18N.languages[this.lang]?.region) || 'west';
    this.injectSwitcher();
    this.applyTranslations();
  }
};

// ── CSS for switcher (injected once) ─────────────────────────────
(function injectCSS() {
  if(document.getElementById('amc-i18n-css')) return;
  const style = document.createElement('style');
  style.id = 'amc-i18n-css';
  style.textContent = `
    #amc-lang-switcher{position:relative;margin-left:auto;flex-shrink:0}
    .lang-btn{display:flex;align-items:center;gap:5px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:4px 9px;cursor:pointer;font-family:var(--FM,monospace);font-size:11px;color:var(--td,#888);transition:all .15s;white-space:nowrap}
    .lang-btn:hover{border-color:rgba(200,162,83,.4);color:var(--gold,#C8A253)}
    .lang-chevron{opacity:.5;font-size:9px}
    .lang-dropdown{display:none;position:absolute;right:0;top:calc(100% + 6px);background:rgba(10,10,14,.98);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:8px;min-width:210px;z-index:999;box-shadow:0 8px 32px rgba(0,0,0,.8);backdrop-filter:blur(16px)}
    .lang-dropdown.open{display:block}
    .lang-group-label{font-family:var(--FM,monospace);font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.3);padding:4px 8px 2px;margin-top:4px}
    .lang-option{display:flex;align-items:center;gap:8px;width:100%;background:none;border:none;border-radius:6px;padding:6px 8px;cursor:pointer;text-align:left;transition:background .12s;color:var(--td,#888)}
    .lang-option:hover{background:rgba(255,255,255,.07)}
    .lang-option.active{background:rgba(200,162,83,.12);color:var(--gold,#C8A253)}
    .lang-flag{font-size:16px;flex-shrink:0}
    .lang-label{font-family:var(--FT,sans-serif);font-size:12px;flex:1}
    .lang-divider{height:1px;background:rgba(255,255,255,.07);margin:6px 0}
    .lang-region-row{display:flex;gap:4px;padding:4px 4px 2px}
    .region-btn{flex:1;font-family:var(--FM,monospace);font-size:9px;padding:4px 2px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:5px;color:rgba(255,255,255,.4);cursor:pointer;transition:all .15s;text-align:center}
    .region-btn:hover{border-color:rgba(200,162,83,.3);color:var(--gold,#C8A253)}
    .region-btn.active{border-color:rgba(200,162,83,.5);background:rgba(200,162,83,.1);color:var(--gold,#C8A253)}
    @media(max-width:600px){
      .lang-dropdown{right:-8px;min-width:190px}
      .lang-code{display:none}
    }
  `;
  document.head.appendChild(style);
})();

// ── Browser language detection ────────────────────────────────────
function detectBrowserLang() {
  const nav = navigator.language || navigator.userLanguage || 'en';
  const code = nav.toLowerCase();
  // Map browser codes to our codes
  if(code.startsWith('ja')) return 'ja';
  if(code.startsWith('ko')) return 'ko';
  if(code.startsWith('zh-cn') || code==='zh-hans') return 'zh-CN';
  if(code.startsWith('zh')) return 'zh-TW';
  if(code.startsWith('vi')) return 'vi';
  if(code.startsWith('id')) return 'id';
  if(code.startsWith('th')) return 'th';
  if(code.startsWith('tr')) return 'tr';
  if(code.startsWith('de')) return 'de';
  if(code.startsWith('fr')) return 'fr';
  if(code.startsWith('es')) return 'es';
  if(code.startsWith('pt')) return 'pt';
  return 'en';
}

// ── Auto-init on DOMContentLoaded ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => AMC.init());

// ═══════════════════════════════════════════════════════════════════
//  EXTENDED TRANSLATIONS — Page content, JS-generated strings
// ═══════════════════════════════════════════════════════════════════
Object.assign(AMC_I18N.translations, {

  // ── INDEX PAGE ───────────────────────────────────────────────────
  'index.hero_label':  { en:'Albion Online · Market Intelligence', tr:'Albion Online · Pazar Analizi', ja:'Albion Online · マーケット情報', ko:'Albion Online · 시장 분석', 'zh-CN':'Albion Online · 市场情报', 'zh-TW':'Albion Online · 市場情報', vi:'Albion Online · Thông Tin Thị Trường', id:'Albion Online · Intelijen Pasar', th:'Albion Online · ข้อมูลตลาด', de:'Albion Online · Marktanalyse', fr:'Albion Online · Intelligence Marché', es:'Albion Online · Inteligencia de Mercado', pt:'Albion Online · Inteligência de Mercado' },
  'index.hero_sub':    { en:'Real-time prices across all 6 cities. Free, always.', tr:'6 şehirde gerçek zamanlı fiyatlar. Ücretsiz, her zaman.', ja:'全6都市のリアルタイム価格。常に無料。', ko:'6개 도시 실시간 가격. 항상 무료.', 'zh-CN':'全6城市实时价格，永久免费。', 'zh-TW':'全6城市即時價格，永久免費。', vi:'Giá thực tế tại 6 thành phố. Miễn phí, mãi mãi.', id:'Harga real-time di 6 kota. Gratis, selalu.', th:'ราคาสดทั้ง 6 เมือง ฟรีตลอดเวลา', de:'Echtzeit-Preise aus allen 6 Städten. Kostenlos, immer.', fr:'Prix en temps réel dans les 6 villes. Gratuit, toujours.', es:'Precios en tiempo real en las 6 ciudades. Gratis, siempre.', pt:'Preços em tempo real nas 6 cidades. Grátis, sempre.' },
  'index.browse_market':{ en:'⚔ Browse Market', tr:'⚔ Pazarı Gez', ja:'⚔ マーケットを見る', ko:'⚔ 시장 보기', 'zh-CN':'⚔ 浏览市场', 'zh-TW':'⚔ 瀏覽市場', vi:'⚔ Xem Thị Trường', id:'⚔ Lihat Pasar', th:'⚔ ดูตลาด', de:'⚔ Markt durchsuchen', fr:'⚔ Parcourir le marché', es:'⚔ Ver Mercado', pt:'⚔ Ver Mercado' },
  'index.live_artifacts':{ en:'Live Artifact Prices', tr:'Canlı Eser Fiyatları', ja:'ライブ アーティファクト価格', ko:'실시간 아티팩트 가격', 'zh-CN':'实时神器价格', 'zh-TW':'即時神器價格', vi:'Giá Hiện Vật Trực Tiếp', id:'Harga Artefak Live', th:'ราคาอาร์ติแฟกต์สด', de:'Live Artefakt-Preise', fr:'Prix Artefacts en direct', es:'Precios de Artefactos en vivo', pt:'Preços de Artefatos ao vivo' },
  'index.most_profitable':{ en:'🔥 Most Profitable Craft Today', tr:'🔥 Bugünün En Karlı Crafti', ja:'🔥 今日最も利益の高いクラフト', ko:'🔥 오늘 가장 수익성 높은 제작', 'zh-CN':'🔥 今日最赚钱的制作', 'zh-TW':'🔥 今日最賺錢的製作', vi:'🔥 Craft Lợi Nhuận Nhất Hôm Nay', id:'🔥 Craft Paling Menguntungkan Hari Ini', th:'🔥 คราฟต์ที่กำไรสูงสุดวันนี้', de:'🔥 Profitabelstes Craft heute', fr:'🔥 Craft le plus rentable aujourd\'hui', es:'🔥 Craft más rentable hoy', pt:'🔥 Craft mais lucrativo hoje' },
  'index.view_full':   { en:'View Full Rankings →', tr:'Tam Sıralamayı Gör →', ja:'全ランキングを見る →', ko:'전체 순위 보기 →', 'zh-CN':'查看完整排名 →', 'zh-TW':'查看完整排名 →', vi:'Xem Bảng Xếp Hạng Đầy Đủ →', id:'Lihat Peringkat Lengkap →', th:'ดูอันดับทั้งหมด →', de:'Alle Rankings anzeigen →', fr:'Voir le classement complet →', es:'Ver clasificación completa →', pt:'Ver classificação completa →' },
  'index.tools':       { en:'⚡ Tools', tr:'⚡ Araçlar', ja:'⚡ ツール', ko:'⚡ 도구', 'zh-CN':'⚡ 工具', 'zh-TW':'⚡ 工具', vi:'⚡ Công Cụ', id:'⚡ Alat', th:'⚡ เครื่องมือ', de:'⚡ Werkzeuge', fr:'⚡ Outils', es:'⚡ Herramientas', pt:'⚡ Ferramentas' },
  'index.qc_market_desc':{ en:'All items with live prices and 6-city comparison.', tr:'6 şehir karşılaştırması ile canlı fiyatlı tüm öğeler.', ja:'全アイテムのライブ価格と6都市比較。', ko:'실시간 가격과 6개 도시 비교.', 'zh-CN':'所有物品实时价格及6城市对比。', 'zh-TW':'所有物品即時價格及6城市對比。', vi:'Tất cả vật phẩm với giá thực tế và so sánh 6 thành phố.', id:'Semua item dengan harga live dan perbandingan 6 kota.', th:'ทุกไอเทมพร้อมราคาสดและเปรียบเทียบ 6 เมือง', de:'Alle Items mit Live-Preisen und 6-Städte-Vergleich.', fr:'Tous les items avec prix en direct et comparaison 6 villes.', es:'Todos los ítems con precios en vivo y comparación de 6 ciudades.', pt:'Todos os itens com preços ao vivo e comparação de 6 cidades.' },
  'index.qc_flip_desc':{ en:'Best city-to-city trades sorted by profit margin.', tr:'Kar marjına göre sıralı en iyi şehirler arası ticaret.', ja:'利益率順の最適な都市間取引。', ko:'수익 마진별 최고 도시 간 거래.', 'zh-CN':'按利润率排序的最佳城市间交易。', 'zh-TW':'按利潤率排序的最佳城市間交易。', vi:'Giao dịch tốt nhất giữa các thành phố theo lợi nhuận.', id:'Perdagangan antar kota terbaik diurutkan berdasarkan margin.', th:'การค้าระหว่างเมืองที่ดีที่สุดเรียงตามกำไร', de:'Beste Stadthandel nach Gewinnmarge sortiert.', fr:'Meilleurs échanges entre villes triés par marge.', es:'Mejores intercambios ciudad-ciudad por margen de ganancia.', pt:'Melhores negociações entre cidades por margem de lucro.' },
  'index.qc_calc_desc':{ en:'Enter buy/sell price and tax to calculate exact profit.', tr:'Kesin karı hesaplamak için alış/satış fiyatı ve vergi girin.', ja:'購入/売却価格と税金を入力して正確な利益を計算。', ko:'구매/판매 가격과 세금을 입력하여 정확한 수익 계산.', 'zh-CN':'输入买入/卖出价格和税费计算精确利润。', 'zh-TW':'輸入買入/賣出價格和稅費計算精確利潤。', vi:'Nhập giá mua/bán và thuế để tính lợi nhuận chính xác.', id:'Masukkan harga beli/jual dan pajak untuk menghitung keuntungan.', th:'ใส่ราคาซื้อ/ขายและภาษีเพื่อคำนวณกำไรที่แน่นอน', de:'Kauf-/Verkaufspreis und Steuer eingeben für genauen Gewinn.', fr:'Entrez prix d\'achat/vente et taxe pour calculer le profit exact.', es:'Ingrese precio compra/venta e impuesto para calcular ganancia.', pt:'Insira preço de compra/venda e imposto para calcular lucro.' },
  'index.qc_craft_desc':{ en:'Live material cost vs. sell price ranked by margin.', tr:'Kar marjına göre canlı malzeme maliyeti vs satış fiyatı.', ja:'素材コストと売却価格のライブ比較（利益率順）。', ko:'마진별 실시간 재료비 대 판매가.', 'zh-CN':'按利润率排名的实时材料成本对比售价。', 'zh-TW':'按利潤率排名的即時材料成本對比售價。', vi:'Chi phí nguyên liệu so với giá bán xếp theo lợi nhuận.', id:'Biaya material live vs harga jual diurutkan berdasarkan margin.', th:'ต้นทุนวัสดุสดเทียบกับราคาขายเรียงตามกำไร', de:'Live Materialkosten vs. Verkaufspreis nach Marge sortiert.', fr:'Coût matériaux live vs prix vente classé par marge.', es:'Costo de materiales vs precio de venta clasificado por margen.', pt:'Custo de materiais ao vivo vs preço de venda por margem.' },
  'index.scanning_crafts':{ en:'Scanning crafts...', tr:'Craftlar taranıyor...', ja:'クラフトを検索中...', ko:'제작 스캔 중...', 'zh-CN':'正在扫描制作...', 'zh-TW':'正在掃描製作...', vi:'Đang quét craft...', id:'Memindai craft...', th:'กำลังสแกนCraft...', de:'Crafts werden gescannt...', fr:'Scan des crafts...', es:'Escaneando crafts...', pt:'Escaneando crafts...' },
  'index.loading':     { en:'Loading...', tr:'Yükleniyor...', ja:'読み込み中...', ko:'로딩 중...', 'zh-CN':'加载中...', 'zh-TW':'載入中...', vi:'Đang tải...', id:'Memuat...', th:'กำลังโหลด...', de:'Lädt...', fr:'Chargement...', es:'Cargando...', pt:'Carregando...' },
  'index.no_data':     { en:'No data — try refreshing', tr:'Veri yok — yenilemeyi deneyin', ja:'データなし — 更新してください', ko:'데이터 없음 — 새로고침 해보세요', 'zh-CN':'无数据 — 请刷新', 'zh-TW':'無數據 — 請刷新', vi:'Không có dữ liệu — thử làm mới', id:'Tidak ada data — coba refresh', th:'ไม่มีข้อมูล — ลองรีเฟรช', de:'Keine Daten — Seite aktualisieren', fr:'Pas de données — essayez de rafraîchir', es:'Sin datos — intente actualizar', pt:'Sem dados — tente atualizar' },

  // ── FLIP FINDER JS STRINGS ────────────────────────────────────────
  'flip.scanning':     { en:'Fetching prices from all cities...', tr:'Tüm şehirlerden fiyatlar alınıyor...', ja:'全都市から価格を取得中...', ko:'모든 도시에서 가격 가져오는 중...', 'zh-CN':'正在从所有城市获取价格...', 'zh-TW':'正在從所有城市獲取價格...', vi:'Đang lấy giá từ tất cả thành phố...', id:'Mengambil harga dari semua kota...', th:'กำลังดึงราคาจากทุกเมือง...', de:'Preise aus allen Städten werden abgerufen...', fr:'Récupération des prix dans toutes les villes...', es:'Obteniendo precios de todas las ciudades...', pt:'Obtendo preços de todas as cidades...' },
  'flip.scanning_btn': { en:'Scanning...', tr:'Taranıyor...', ja:'検索中...', ko:'스캔 중...', 'zh-CN':'扫描中...', 'zh-TW':'掃描中...', vi:'Đang quét...', id:'Memindai...', th:'กำลังสแกน...', de:'Scannt...', fr:'Scan en cours...', es:'Escaneando...', pt:'Escaneando...' },
  'flip.prices_loaded':{ en:'✅ Prices loaded! Ready to flip!', tr:'✅ Fiyatlar yüklendi! Flipe hazır!', ja:'✅ 価格を読み込みました！フリップ開始！', ko:'✅ 가격 로드 완료! 플립 준비!', 'zh-CN':'✅ 价格已加载！可以开始翻转！', 'zh-TW':'✅ 價格已載入！可以開始翻轉！', vi:'✅ Giá đã tải! Sẵn sàng flip!', id:'✅ Harga dimuat! Siap flip!', th:'✅ โหลดราคาแล้ว! พร้อม Flip!', de:'✅ Preise geladen! Bereit zum Flippen!', fr:'✅ Prix chargés! Prêt à flipper!', es:'✅ Precios cargados! Listo para flipear!', pt:'✅ Preços carregados! Pronto para flipar!' },
  'flip.found':        { en:'Found {n} profitable trades', tr:'{n} karlı işlem bulundu', ja:'{n}件の利益取引が見つかりました', ko:'{n}개의 수익성 거래 발견', 'zh-CN':'发现{n}个盈利交易', 'zh-TW':'發現{n}個盈利交易', vi:'Tìm thấy {n} giao dịch có lợi', id:'Ditemukan {n} perdagangan menguntungkan', th:'พบ {n} การค้าที่ทำกำไร', de:'{n} profitable Trades gefunden', fr:'{n} trades rentables trouvés', es:'Se encontraron {n} operaciones rentables', pt:'Encontradas {n} negociações lucrativas' },
  'flip.gate_title':   { en:'◈ Flip Finder', tr:'◈ Flip Bulucu', ja:'◈ フリップ検索', ko:'◈ 플립 파인더', 'zh-CN':'◈ 搬砖助手', 'zh-TW':'◈ 搬磚助手', vi:'◈ Tìm Flip', id:'◈ Pencari Flip', th:'◈ ค้นหาFlip', de:'◈ Flip Finder', fr:'◈ Flip Finder', es:'◈ Flip Finder', pt:'◈ Flip Finder' },
  'flip.view_results': { en:'View Results →', tr:'Sonuçları Gör →', ja:'結果を見る →', ko:'결과 보기 →', 'zh-CN':'查看结果 →', 'zh-TW':'查看結果 →', vi:'Xem Kết Quả →', id:'Lihat Hasil →', th:'ดูผลลัพธ์ →', de:'Ergebnisse ansehen →', fr:'Voir les résultats →', es:'Ver resultados →', pt:'Ver resultados →' },
  'flip.click_to_set': { en:'Click "Scan Flips" to find the best city-to-city trades', tr:'"Flipi Tara" ya tıkla en iyi ticaret yollarını bul', ja:'"フリップ検索"をクリックして最適な都市間取引を探す', ko:'"플립 스캔"을 클릭해 최고의 도시 간 거래를 찾으세요', 'zh-CN':'点击"扫描翻转"找最佳城市间交易', 'zh-TW':'點擊"掃描翻轉"找最佳城市間交易', vi:'Nhấn "Quét Flip" để tìm giao dịch tốt nhất', id:'Klik "Pindai Flip" untuk menemukan perdagangan terbaik', th:'คลิก "สแกนFlip" เพื่อหาการค้าที่ดีที่สุด', de:'Klicke "Flipps suchen" für beste Stadthandel', fr:'Cliquez "Scanner" pour trouver les meilleurs trades', es:'Haz clic en "Escanear" para encontrar los mejores intercambios', pt:'Clique "Escanear" para encontrar as melhores negociações' },

  // ── CRAFT JS STRINGS ──────────────────────────────────────────────
  'craft.scanning_btn':{ en:'Scanning...', tr:'Taranıyor...', ja:'検索中...', ko:'스캔 중...', 'zh-CN':'扫描中...', 'zh-TW':'掃描中...', vi:'Đang quét...', id:'Memindai...', th:'กำลังสแกน...', de:'Scannt...', fr:'Scan en cours...', es:'Escaneando...', pt:'Escaneando...' },
  'craft.no_data':     { en:'No craft data found. Try a different city or check back later.', tr:'Craft verisi bulunamadı. Farklı bir şehir deneyin.', ja:'クラフトデータが見つかりません。別の都市を試してください。', ko:'제작 데이터 없음. 다른 도시를 시도하세요.', 'zh-CN':'未找到制作数据，请换个城市或稍后再试。', 'zh-TW':'未找到製作數據，請換個城市或稍後再試。', vi:'Không tìm thấy dữ liệu craft. Thử thành phố khác.', id:'Data craft tidak ditemukan. Coba kota lain.', th:'ไม่พบข้อมูลCraft ลองเมืองอื่น', de:'Keine Craft-Daten gefunden. Andere Stadt versuchen.', fr:'Aucune donnée craft. Essayez une autre ville.', es:'No se encontraron datos de craft. Prueba otra ciudad.', pt:'Nenhum dado de craft encontrado. Tente outra cidade.' },
  'craft.best_right':  { en:'Best Craft Right Now', tr:'Şu Anki En İyi Craft', ja:'今すぐ最適なクラフト', ko:'지금 최고 제작', 'zh-CN':'当前最佳制作', 'zh-TW':'當前最佳製作', vi:'Craft Tốt Nhất Ngay Bây Giờ', id:'Craft Terbaik Saat Ini', th:'คราฟต์ดีที่สุดตอนนี้', de:'Bestes Craft gerade', fr:'Meilleur craft maintenant', es:'Mejor craft ahora', pt:'Melhor craft agora' },
  'craft.fetching':    { en:'Fetching prices for {city}...', tr:'{city} fiyatları alınıyor...', ja:'{city}の価格を取得中...', ko:'{city} 가격 가져오는 중...', 'zh-CN':'正在获取{city}的价格...', 'zh-TW':'正在獲取{city}的價格...', vi:'Đang lấy giá {city}...', id:'Mengambil harga {city}...', th:'กำลังดึงราคา{city}...', de:'Preise für {city} werden abgerufen...', fr:'Récupération des prix pour {city}...', es:'Obteniendo precios para {city}...', pt:'Obtendo preços para {city}...' },
  'craft.crafts_analyzed':{ en:'{n} crafts analyzed', tr:'{n} craft analiz edildi', ja:'{n}クラフト分析済み', ko:'{n}개 제작 분석됨', 'zh-CN':'已分析{n}个制作', 'zh-TW':'已分析{n}個製作', vi:'{n} craft đã phân tích', id:'{n} craft dianalisis', th:'วิเคราะห์ {n} craft', de:'{n} Crafts analysiert', fr:'{n} crafts analysés', es:'{n} crafts analizados', pt:'{n} crafts analisados' },
  'craft.rankings':    { en:'Crafting Profit Rankings', tr:'Craft Karlılık Sıralaması', ja:'クラフト利益ランキング', ko:'제작 수익 순위', 'zh-CN':'制作利润排行榜', 'zh-TW':'製作利潤排行榜', vi:'Bảng Xếp Hạng Lợi Nhuận Craft', id:'Peringkat Keuntungan Craft', th:'อันดับกำไรจากการคราฟต์', de:'Craft-Gewinn-Ranking', fr:'Classement rentabilité craft', es:'Ranking de rentabilidad de craft', pt:'Ranking de lucratividade de craft' },
  'craft.profit_margin':{ en:'Profit Margin', tr:'Kar Marjı', ja:'利益率', ko:'수익 마진', 'zh-CN':'利润率', 'zh-TW':'利潤率', vi:'Biên Lợi Nhuận', id:'Margin Keuntungan', th:'อัตรากำไร', de:'Gewinnspanne', fr:'Marge bénéficiaire', es:'Margen de ganancia', pt:'Margem de lucro' },
  'craft.net_profit':  { en:'Net Profit', tr:'Net Kar', ja:'純利益', ko:'순 수익', 'zh-CN':'净利润', 'zh-TW':'淨利潤', vi:'Lợi Nhuận Ròng', id:'Keuntungan Bersih', th:'กำไรสุทธิ', de:'Nettogewinn', fr:'Bénéfice net', es:'Ganancia neta', pt:'Lucro líquido' },

  // ── MARKET PAGE ───────────────────────────────────────────────────
  'market.all_categories':{ en:'All Categories', tr:'Tüm Kategoriler', ja:'全カテゴリー', ko:'모든 카테고리', 'zh-CN':'所有类别', 'zh-TW':'所有類別', vi:'Tất Cả Danh Mục', id:'Semua Kategori', th:'ทุกหมวดหมู่', de:'Alle Kategorien', fr:'Toutes les catégories', es:'Todas las categorías', pt:'Todas as categorias' },
  'market.loading':    { en:'Loading {city}... ({i}/{n})', tr:'{city} yükleniyor... ({i}/{n})', ja:'{city}を読み込み中... ({i}/{n})', ko:'{city} 로딩 중... ({i}/{n})', 'zh-CN':'加载{city}中...({i}/{n})', 'zh-TW':'載入{city}中...({i}/{n})', vi:'Đang tải {city}... ({i}/{n})', id:'Memuat {city}... ({i}/{n})', th:'กำลังโหลด{city}...({i}/{n})', de:'{city} wird geladen... ({i}/{n})', fr:'Chargement {city}... ({i}/{n})', es:'Cargando {city}... ({i}/{n})', pt:'Carregando {city}... ({i}/{n})' },
  'market.showing':    { en:'Showing {a}–{b} of {n} items', tr:'{n} öğeden {a}–{b} gösteriliyor', ja:'{n}アイテム中{a}–{b}を表示', ko:'{n}개 아이템 중 {a}–{b} 표시', 'zh-CN':'显示{n}个物品中的{a}–{b}', 'zh-TW':'顯示{n}個物品中的{a}–{b}', vi:'Hiển thị {a}–{b} trong {n} vật phẩm', id:'Menampilkan {a}–{b} dari {n} item', th:'แสดง {a}–{b} จาก {n} ไอเทม', de:'{a}–{b} von {n} Items angezeigt', fr:'Affichage {a}–{b} sur {n} items', es:'Mostrando {a}–{b} de {n} ítems', pt:'Exibindo {a}–{b} de {n} itens' },
  'market.best_price': { en:'Best', tr:'En İyi', ja:'最安', ko:'최저', 'zh-CN':'最优', 'zh-TW':'最優', vi:'Tốt nhất', id:'Terbaik', th:'ดีที่สุด', de:'Bestes', fr:'Meilleur', es:'Mejor', pt:'Melhor' },
  'market.no_price':   { en:'—', tr:'—', ja:'—', ko:'—', 'zh-CN':'—', 'zh-TW':'—', vi:'—', id:'—', th:'—', de:'—', fr:'—', es:'—', pt:'—' },
  'market.updated':    { en:'Updated', tr:'Güncellendi', ja:'更新', ko:'업데이트', 'zh-CN':'已更新', 'zh-TW':'已更新', vi:'Đã cập nhật', id:'Diperbarui', th:'อัปเดต', de:'Aktualisiert', fr:'Mis à jour', es:'Actualizado', pt:'Atualizado' },
  'market.search_placeholder':{ en:'Search items...', tr:'Öğe ara...', ja:'アイテムを検索...', ko:'아이템 검색...', 'zh-CN':'搜索物品...', 'zh-TW':'搜尋物品...', vi:'Tìm vật phẩm...', id:'Cari item...', th:'ค้นหาไอเทม...', de:'Items suchen...', fr:'Rechercher des items...', es:'Buscar ítems...', pt:'Buscar itens...' },

  // ── CALCULATOR PAGE ───────────────────────────────────────────────
  'calc.enter_buy':    { en:'Enter buy price', tr:'Alış fiyatı girin', ja:'購入価格を入力', ko:'구매 가격 입력', 'zh-CN':'输入购买价格', 'zh-TW':'輸入購買價格', vi:'Nhập giá mua', id:'Masukkan harga beli', th:'ใส่ราคาซื้อ', de:'Kaufpreis eingeben', fr:'Entrez le prix d\'achat', es:'Ingrese el precio de compra', pt:'Digite o preço de compra' },
  'calc.enter_sell':   { en:'Enter sell price', tr:'Satış fiyatı girin', ja:'売却価格を入力', ko:'판매 가격 입력', 'zh-CN':'输入卖出价格', 'zh-TW':'輸入賣出價格', vi:'Nhập giá bán', id:'Masukkan harga jual', th:'ใส่ราคาขาย', de:'Verkaufspreis eingeben', fr:'Entrez le prix de vente', es:'Ingrese el precio de venta', pt:'Digite o preço de venda' },
  'calc.enter_qty':    { en:'Quantity', tr:'Miktar', ja:'数量', ko:'수량', 'zh-CN':'数量', 'zh-TW':'數量', vi:'Số lượng', id:'Jumlah', th:'จำนวน', de:'Anzahl', fr:'Quantité', es:'Cantidad', pt:'Quantidade' },
  'calc.result_profit':{ en:'Net Profit', tr:'Net Kar', ja:'純利益', ko:'순 수익', 'zh-CN':'净利润', 'zh-TW':'淨利潤', vi:'Lợi nhuận ròng', id:'Keuntungan bersih', th:'กำไรสุทธิ', de:'Nettogewinn', fr:'Bénéfice net', es:'Ganancia neta', pt:'Lucro líquido' },

  // ── COMMON ERROR / STATUS ─────────────────────────────────────────
  'status.retry':      { en:'⟳ Retry', tr:'⟳ Tekrar Dene', ja:'⟳ 再試行', ko:'⟳ 다시 시도', 'zh-CN':'⟳ 重试', 'zh-TW':'⟳ 重試', vi:'⟳ Thử Lại', id:'⟳ Coba Lagi', th:'⟳ ลองอีกครั้ง', de:'⟳ Erneut versuchen', fr:'⟳ Réessayer', es:'⟳ Reintentar', pt:'⟳ Tentar novamente' },
  'status.error':      { en:'Failed to load data. Check your connection.', tr:'Veri yüklenemedi. Bağlantınızı kontrol edin.', ja:'データを読み込めませんでした。接続を確認してください。', ko:'데이터를 불러올 수 없습니다. 연결을 확인하세요.', 'zh-CN':'加载数据失败，请检查您的连接。', 'zh-TW':'載入數據失敗，請檢查您的連線。', vi:'Không tải được dữ liệu. Kiểm tra kết nối.', id:'Gagal memuat data. Periksa koneksi Anda.', th:'โหลดข้อมูลล้มเหลว ตรวจสอบการเชื่อมต่อ', de:'Daten konnten nicht geladen werden. Verbindung prüfen.', fr:'Échec du chargement. Vérifiez votre connexion.', es:'Error al cargar datos. Comprueba tu conexión.', pt:'Falha ao carregar dados. Verifique sua conexão.' },

  // ── GATE MESSAGES (flip finder loading screen) ────────────────────
  'gate.msg1': { en:'🐀 A rat is calculating your profit...',    tr:'🐀 Bir sıçan karını hesaplıyor...', ja:'🐀 ネズミがあなたの利益を計算中...', ko:'🐀 쥐가 수익을 계산 중...', 'zh-CN':'🐀 一只耗子正在计算你的利润...', 'zh-TW':'🐀 一隻老鼠正在計算你的利潤...', vi:'🐀 Một con chuột đang tính lợi nhuận...', id:'🐀 Seekor tikus sedang menghitung keuntunganmu...', th:'🐀 หนูกำลังคำนวณกำไรของคุณ...', de:'🐀 Eine Ratte berechnet deinen Gewinn...', fr:'🐀 Un rat calcule ton profit...', es:'🐀 Una rata está calculando tu ganancia...', pt:'🐀 Um rato está calculando seu lucro...' },
  'gate.msg2': { en:'💰 Bribing a market trader for secret prices...',  tr:'💰 Gizli fiyatlar için pazar tacirini rüşvet veriyor...', ja:'💰 秘密価格のために市場商人に賄賂を贈っています...', ko:'💰 비밀 가격을 위해 시장 상인에게 뇌물 중...', 'zh-CN':'💰 正在贿赂市场商人获取秘密价格...', 'zh-TW':'💰 正在賄賂市場商人獲取秘密價格...', vi:'💰 Đang hối lộ thương nhân để lấy giá bí mật...', id:'💰 Menyuap pedagang pasar untuk harga rahasia...', th:'💰 กำลังติดสินบนพ่อค้าตลาดเพื่อราคาลับ...', de:'💰 Besteche einen Händler für Geheimpreise...', fr:'💰 Je soudoie un marchand pour des prix secrets...', es:'💰 Sobornando a un comerciante por precios secretos...', pt:'💰 Subornando um comerciante por preços secretos...' },
  'gate.msg3': { en:'🏃 Sending scouts to every city market...', tr:'🏃 Her şehir pazarına kasifler gönderiliyor...', ja:'🏃 全都市市場に斥候を送っています...', ko:'🏃 모든 도시 시장에 정찰대 파견 중...', 'zh-CN':'🏃 正在向每个城市市场派遣侦察员...', 'zh-TW':'🏃 正在向每個城市市場派遣偵察員...', vi:'🏃 Đang gửi trinh sát đến mọi chợ thành phố...', id:'🏃 Mengirim pengintai ke setiap pasar kota...', th:'🏃 กำลังส่งผู้สอดแนมไปทุกตลาดในเมือง...', de:'🏃 Schicke Späher zu jedem Stadtmarkt...', fr:'🏃 J\'envoie des éclaireurs dans chaque marché...', es:'🏃 Enviando exploradores a cada mercado...', pt:'🏃 Enviando batedores para cada mercado...' },
});

// ── Helper: translate with variable substitution ──────────────────
// Usage: AMC.ts('flip.found', {n: 42}) → "Found 42 profitable trades"
AMC.ts = function(key, vars) {
  let str = this.t(key);
  if(vars) Object.keys(vars).forEach(k => { str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), vars[k]); });
  return str;
};

// ── About / Contact / Privacy / Item page translations ──────────────
Object.assign(AMC_I18N.translations, {

  // ── ABOUT ─────────────────────────────────────────────────────────
  'about.title':        { en:'About AlbionMarketCalc', tr:'AlbionMarketCalc Hakkında', ja:'AlbionMarketCalcについて', ko:'AlbionMarketCalc 소개', 'zh-CN':'关于 AlbionMarketCalc', 'zh-TW':'關於 AlbionMarketCalc', vi:'Giới Thiệu AlbionMarketCalc', id:'Tentang AlbionMarketCalc', th:'เกี่ยวกับ AlbionMarketCalc', de:'Über AlbionMarketCalc', fr:'À propos d\'AlbionMarketCalc', es:'Acerca de AlbionMarketCalc', pt:'Sobre o AlbionMarketCalc' },
  'about.subtitle':     { en:'A free, community-built trading toolkit for Albion Online players. No login required. No pay-walls. Just live market data and tools that help you make smarter silver.', tr:'Albion Online oyuncuları için ücretsiz, topluluk yapımı ticaret araç seti. Giriş gerekmez. Ödeme duvarı yok. Sadece canlı pazar verileri ve daha akıllı gümüş kazanmanıza yardımcı araçlar.', ja:'Albion Onlineプレイヤー向けの無料コミュニティ製取引ツールキット。ログイン不要。有料壁なし。ライブ市場データとより賢くシルバーを稼ぐためのツール。', ko:'Albion Online 플레이어를 위한 무료 커뮤니티 거래 툴킷. 로그인 불필요. 유료 벽 없음. 더 스마트하게 실버를 버는 데 도움이 되는 라이브 시장 데이터와 도구.', 'zh-CN':'为Albion Online玩家打造的免费社区交易工具包。无需登录，无付费墙，只有实时市场数据和帮助你赚取更多银币的工具。', 'zh-TW':'為Albion Online玩家打造的免費社區交易工具包。無需登錄，無付費牆，只有即時市場數據和幫助你賺取更多銀幣的工具。', vi:'Bộ công cụ giao dịch miễn phí cho người chơi Albion Online. Không cần đăng nhập. Không tường phí. Chỉ có dữ liệu thị trường thực tế và công cụ giúp bạn kiếm bạc thông minh hơn.', id:'Toolkit trading gratis untuk pemain Albion Online. Tidak perlu login. Tidak ada paywall. Hanya data pasar live dan alat untuk membantu kamu mendapatkan silver lebih cerdas.', th:'ชุดเครื่องมือการค้าฟรีสำหรับผู้เล่น Albion Online สร้างโดยชุมชน ไม่ต้องล็อกอิน ไม่มีกำแพงการชำระเงิน แค่ข้อมูลตลาดสดและเครื่องมือที่ช่วยให้คุณได้เงินซิลเวอร์มากขึ้น', de:'Ein kostenloses, von der Community entwickeltes Trading-Toolkit für Albion Online. Kein Login erforderlich. Keine Bezahlschranken. Nur Live-Marktdaten und Tools.', fr:'Une boîte à outils de trading gratuite pour les joueurs d\'Albion Online. Pas de connexion requise. Pas de paywall. Juste des données de marché en direct.', es:'Un kit de herramientas de trading gratuito para jugadores de Albion Online. Sin registro. Sin muros de pago. Solo datos de mercado en vivo.', pt:'Um kit de ferramentas de trading gratuito para jogadores de Albion Online. Sem login. Sem paywall. Apenas dados de mercado ao vivo.' },
  'about.tools_h2':     { en:'🔧 Tools', tr:'🔧 Araçlar', ja:'🔧 ツール', ko:'🔧 도구', 'zh-CN':'🔧 工具', 'zh-TW':'🔧 工具', vi:'🔧 Công Cụ', id:'🔧 Alat', th:'🔧 เครื่องมือ', de:'🔧 Werkzeuge', fr:'🔧 Outils', es:'🔧 Herramientas', pt:'🔧 Ferramentas' },
  'about.data_h2':      { en:'📡 Data Source', tr:'📡 Veri Kaynağı', ja:'📡 データソース', ko:'📡 데이터 소스', 'zh-CN':'📡 数据来源', 'zh-TW':'📡 數據來源', vi:'📡 Nguồn Dữ Liệu', id:'📡 Sumber Data', th:'📡 แหล่งข้อมูล', de:'📡 Datenquelle', fr:'📡 Source de données', es:'📡 Fuente de datos', pt:'📡 Fonte de dados' },
  'about.disclaimer_h2':{ en:'⚠️ Disclaimer', tr:'⚠️ Yasal Uyarı', ja:'⚠️ 免責事項', ko:'⚠️ 면책 조항', 'zh-CN':'⚠️ 免责声明', 'zh-TW':'⚠️ 免責聲明', vi:'⚠️ Tuyên Bố Miễn Trách', id:'⚠️ Penafian', th:'⚠️ ข้อจำกัดความรับผิดชอบ', de:'⚠️ Haftungsausschluss', fr:'⚠️ Avertissement', es:'⚠️ Descargo de responsabilidad', pt:'⚠️ Aviso legal' },
  'about.contact_h2':   { en:'✉️ Contact', tr:'✉️ İletişim', ja:'✉️ お問い合わせ', ko:'✉️ 연락처', 'zh-CN':'✉️ 联系我们', 'zh-TW':'✉️ 聯繫我們', vi:'✉️ Liên Hệ', id:'✉️ Kontak', th:'✉️ ติดต่อ', de:'✉️ Kontakt', fr:'✉️ Contact', es:'✉️ Contacto', pt:'✉️ Contato' },
  'about.not_affiliated':{ en:'AlbionMarketCalc is an independent community project and is not affiliated with Albion Online or Sandbox Interactive GmbH.', tr:'AlbionMarketCalc bağımsız bir topluluk projesidir ve Albion Online veya Sandbox Interactive GmbH ile bağlantılı değildir.', ja:'AlbionMarketCalcは独立したコミュニティプロジェクトであり、Albion OnlineまたはSandbox Interactive GmbHとは無関係です。', ko:'AlbionMarketCalc은 독립적인 커뮤니티 프로젝트이며 Albion Online 또는 Sandbox Interactive GmbH와 관련이 없습니다.', 'zh-CN':'AlbionMarketCalc是独立社区项目，与Albion Online或Sandbox Interactive GmbH无关。', 'zh-TW':'AlbionMarketCalc是獨立社區項目，與Albion Online或Sandbox Interactive GmbH無關。', vi:'AlbionMarketCalc là dự án cộng đồng độc lập, không liên kết với Albion Online hay Sandbox Interactive GmbH.', id:'AlbionMarketCalc adalah proyek komunitas independen dan tidak berafiliasi dengan Albion Online atau Sandbox Interactive GmbH.', th:'AlbionMarketCalc เป็นโครงการชุมชนอิสระ ไม่มีส่วนเกี่ยวข้องกับ Albion Online หรือ Sandbox Interactive GmbH', de:'AlbionMarketCalc ist ein unabhängiges Communityprojekt und steht in keiner Verbindung zu Albion Online oder Sandbox Interactive GmbH.', fr:'AlbionMarketCalc est un projet communautaire indépendant non affilié à Albion Online ni à Sandbox Interactive GmbH.', es:'AlbionMarketCalc es un proyecto comunitario independiente y no está afiliado a Albion Online ni a Sandbox Interactive GmbH.', pt:'AlbionMarketCalc é um projeto comunitário independente e não é afiliado à Albion Online ou Sandbox Interactive GmbH.' },
  'about.contact_p':    { en:'Questions, bug reports or suggestions? Email us at', tr:'Sorularınız, hata raporları veya önerileriniz mi var? Bize e-posta gönderin:', ja:'ご質問、バグ報告、ご提案は以下のメールへ：', ko:'질문, 버그 신고 또는 제안이 있으신가요? 이메일을 보내주세요:', 'zh-CN':'有问题、错误报告或建议？请发送电子邮件至：', 'zh-TW':'有問題、錯誤報告或建議？請發送電子郵件至：', vi:'Câu hỏi, báo lỗi hoặc gợi ý? Gửi email cho chúng tôi tại:', id:'Ada pertanyaan, laporan bug, atau saran? Hubungi kami di:', th:'มีคำถาม รายงานบั๊ก หรือข้อเสนอแนะ? ส่งอีเมลหาเราที่:', de:'Fragen, Fehlerberichte oder Vorschläge? Schreibe uns eine E-Mail:', fr:'Questions, rapports de bugs ou suggestions ? Envoyez-nous un email :', es:'¿Preguntas, reportes de errores o sugerencias? Escríbenos a:', pt:'Dúvidas, relatórios de bugs ou sugestões? Envie-nos um e-mail:' },
  'about.tc_market':    { en:'Market Browser', tr:'Pazar Tarayıcısı', ja:'マーケット一覧', ko:'시장 브라우저', 'zh-CN':'市场浏览器', 'zh-TW':'市場瀏覽器', vi:'Trình Duyệt Thị Trường', id:'Browser Pasar', th:'เบราว์เซอร์ตลาด', de:'Marktübersicht', fr:'Navigateur de marché', es:'Navegador de mercado', pt:'Navegador de mercado' },
  'about.tc_flip':      { en:'Flip Finder', tr:'Flip Bulucu', ja:'フリップ検索', ko:'플립 파인더', 'zh-CN':'搬砖助手', 'zh-TW':'搬磚助手', vi:'Tìm Flip', id:'Pencari Flip', th:'ค้นหาFlip', de:'Flip Finder', fr:'Flip Finder', es:'Flip Finder', pt:'Flip Finder' },
  'about.tc_calc':      { en:'Market Calculator', tr:'Pazar Hesaplayıcı', ja:'マーケット計算機', ko:'시장 계산기', 'zh-CN':'市场计算器', 'zh-TW':'市場計算器', vi:'Máy Tính Thị Trường', id:'Kalkulator Pasar', th:'เครื่องคำนวณตลาด', de:'Marktrechner', fr:'Calculateur de marché', es:'Calculadora de mercado', pt:'Calculadora de mercado' },
  'about.tc_craft':     { en:'Most Profitable Craft Today', tr:'Bugünün En Karlı Crafti', ja:'今日最も利益の高いクラフト', ko:'오늘 가장 수익성 높은 제작', 'zh-CN':'今日最赚钱的制作', 'zh-TW':'今日最賺錢的製作', vi:'Craft Lợi Nhuận Nhất Hôm Nay', id:'Craft Paling Menguntungkan', th:'คราฟต์กำไรสูงสุดวันนี้', de:'Profitabelstes Craft heute', fr:'Craft le plus rentable', es:'Craft más rentable hoy', pt:'Craft mais lucrativo hoje' },

  // ── CONTACT ───────────────────────────────────────────────────────
  'contact.title':      { en:'Contact Us', tr:'Bize Ulaşın', ja:'お問い合わせ', ko:'연락하기', 'zh-CN':'联系我们', 'zh-TW':'聯繫我們', vi:'Liên Hệ Với Chúng Tôi', id:'Hubungi Kami', th:'ติดต่อเรา', de:'Kontakt', fr:'Contactez-nous', es:'Contáctenos', pt:'Fale Conosco' },
  'contact.subtitle':   { en:'Get in touch', tr:'İletişime geçin', ja:'お気軽にどうぞ', ko:'연락주세요', 'zh-CN':'联系方式', 'zh-TW':'聯繫方式', vi:'Liên lạc với chúng tôi', id:'Hubungi kami', th:'ติดต่อ', de:'Kontakt aufnehmen', fr:'Prenez contact', es:'Ponerse en contacto', pt:'Entre em contato' },
  'contact.send_email': { en:'Send us an email', tr:'Bize e-posta gönderin', ja:'メールを送る', ko:'이메일 보내기', 'zh-CN':'给我们发邮件', 'zh-TW':'給我們發郵件', vi:'Gửi email cho chúng tôi', id:'Kirim email ke kami', th:'ส่งอีเมลถึงเรา', de:'E-Mail senden', fr:'Envoyez-nous un email', es:'Envíenos un correo', pt:'Envie-nos um e-mail' },
  'contact.email_desc': { en:"Have a question, found a bug, or want to suggest a feature? We'd love to hear from you.", tr:'Sorunuz mu var, hata mı buldunuz veya bir özellik önermek mi istiyorsunuz? Sizi duymaktan mutluluk duyarız.', ja:'ご質問、バグ発見、機能提案がございましたら、ぜひご連絡ください。', ko:'질문이 있거나 버그를 발견했거나 기능을 제안하고 싶으신가요? 연락해 주세요.', 'zh-CN':'有问题、发现了bug，或者想提出功能建议？我们很乐意听取您的意见。', 'zh-TW':'有問題、發現了bug，或者想提出功能建議？我們很樂意聆聽您的意見。', vi:'Có câu hỏi, tìm thấy lỗi, hoặc muốn đề xuất tính năng? Chúng tôi rất muốn nghe từ bạn.', id:'Punya pertanyaan, menemukan bug, atau ingin mengusulkan fitur? Kami senang mendengar dari kamu.', th:'มีคำถาม พบบั๊ก หรืออยากเสนอฟีเจอร์? เรายินดีรับฟังเสมอ', de:'Fragen, einen Bug gefunden oder eine Funktion vorschlagen? Wir freuen uns auf deine Nachricht.', fr:'Une question, un bug trouvé ou une suggestion de fonctionnalité ? Nous serions ravis de vous lire.', es:'¿Una pregunta, un error encontrado o sugerencia de función? Nos encantaría saber de ti.', pt:'Tem uma pergunta, encontrou um bug ou quer sugerir uma funcionalidade? Adoraríamos ouvir você.' },
  'contact.bug':        { en:'Bug reports & broken prices', tr:'Hata raporları ve bozuk fiyatlar', ja:'バグ報告と価格エラー', ko:'버그 신고 및 가격 오류', 'zh-CN':'错误报告和价格问题', 'zh-TW':'錯誤報告和價格問題', vi:'Báo lỗi & giá không chính xác', id:'Laporan bug & harga salah', th:'รายงานบั๊กและราคาผิดพลาด', de:'Fehlerberichte & falsche Preise', fr:'Rapports de bugs & prix incorrects', es:'Reportes de errores y precios incorrectos', pt:'Relatórios de bugs e preços incorretos' },
  'contact.feature':    { en:'Feature suggestions', tr:'Özellik önerileri', ja:'機能提案', ko:'기능 제안', 'zh-CN':'功能建议', 'zh-TW':'功能建議', vi:'Đề xuất tính năng', id:'Saran fitur', th:'เสนอฟีเจอร์', de:'Funktionsvorschläge', fr:'Suggestions de fonctionnalités', es:'Sugerencias de características', pt:'Sugestões de recursos' },
  'contact.partner':    { en:'Partnerships & collaborations', tr:'Ortaklık ve işbirliği', ja:'パートナーシップ & コラボ', ko:'파트너십 & 협업', 'zh-CN':'合作与协作', 'zh-TW':'合作與協作', vi:'Hợp tác & cộng tác', id:'Kemitraan & kolaborasi', th:'ความร่วมมือและการทำงานร่วมกัน', de:'Partnerschaften & Zusammenarbeit', fr:'Partenariats & collaborations', es:'Asociaciones y colaboraciones', pt:'Parcerias e colaborações' },
  'contact.legal':      { en:'Privacy & legal inquiries', tr:'Gizlilik ve yasal sorular', ja:'プライバシーと法的問い合わせ', ko:'개인정보 및 법적 문의', 'zh-CN':'隐私和法律咨询', 'zh-TW':'隱私和法律諮詢', vi:'Câu hỏi về quyền riêng tư & pháp lý', id:'Pertanyaan privasi & hukum', th:'สอบถามเรื่องความเป็นส่วนตัวและกฎหมาย', de:'Datenschutz & rechtliche Anfragen', fr:'Confidentialité & questions juridiques', es:'Privacidad e inquietudes legales', pt:'Privacidade e questões legais' },

  // ── PRIVACY ───────────────────────────────────────────────────────
  'privacy.title':      { en:'Privacy Policy', tr:'Gizlilik Politikası', ja:'プライバシーポリシー', ko:'개인정보처리방침', 'zh-CN':'隐私政策', 'zh-TW':'隱私政策', vi:'Chính Sách Bảo Mật', id:'Kebijakan Privasi', th:'นโยบายความเป็นส่วนตัว', de:'Datenschutzrichtlinie', fr:'Politique de confidentialité', es:'Política de privacidad', pt:'Política de privacidade' },
  'privacy.updated':    { en:'Last updated: March 2026', tr:'Son güncelleme: Mart 2026', ja:'最終更新：2026年3月', ko:'최종 수정: 2026년 3월', 'zh-CN':'最后更新：2026年3月', 'zh-TW':'最後更新：2026年3月', vi:'Cập nhật lần cuối: Tháng 3 năm 2026', id:'Terakhir diperbarui: Maret 2026', th:'อัปเดตล่าสุด: มีนาคม 2026', de:'Zuletzt aktualisiert: März 2026', fr:'Dernière mise à jour : mars 2026', es:'Última actualización: marzo de 2026', pt:'Última atualização: março de 2026' },

  // ── ITEM PAGE ─────────────────────────────────────────────────────
  'item.prices_by_city':{ en:'Prices by City', tr:'Şehre Göre Fiyatlar', ja:'都市別価格', ko:'도시별 가격', 'zh-CN':'按城市查看价格', 'zh-TW':'按城市查看價格', vi:'Giá Theo Thành Phố', id:'Harga per Kota', th:'ราคาตามเมือง', de:'Preise nach Stadt', fr:'Prix par ville', es:'Precios por ciudad', pt:'Preços por cidade' },
  'item.city':          { en:'City', tr:'Şehir', ja:'都市', ko:'도시', 'zh-CN':'城市', 'zh-TW':'城市', vi:'Thành Phố', id:'Kota', th:'เมือง', de:'Stadt', fr:'Ville', es:'Ciudad', pt:'Cidade' },
  'item.sell_price':    { en:'Sell Price (Min)', tr:'Satış Fiyatı (Min)', ja:'売値（最安）', ko:'판매가 (최저)', 'zh-CN':'卖出价（最低）', 'zh-TW':'賣出價（最低）', vi:'Giá Bán (Thấp Nhất)', id:'Harga Jual (Min)', th:'ราคาขาย (ต่ำสุด)', de:'Verkaufspreis (Min)', fr:'Prix vente (min)', es:'Precio venta (mín)', pt:'Preço venda (mín)' },
  'item.buy_order':     { en:'Buy Order (Max)', tr:'Alış Emri (Max)', ja:'購入注文（最高）', ko:'구매 주문 (최대)', 'zh-CN':'购买订单（最高）', 'zh-TW':'購買訂單（最高）', vi:'Lệnh Mua (Cao Nhất)', id:'Order Beli (Max)', th:'คำสั่งซื้อ (สูงสุด)', de:'Kauforder (Max)', fr:'Ordre achat (max)', es:'Orden compra (máx)', pt:'Ordem compra (máx)' },
  'item.flip_profit':   { en:'Flip Profit', tr:'Flip Karı', ja:'フリップ利益', ko:'플립 수익', 'zh-CN':'翻转利润', 'zh-TW':'翻轉利潤', vi:'Lợi Nhuận Flip', id:'Keuntungan Flip', th:'กำไรFlip', de:'Flip-Gewinn', fr:'Profit flip', es:'Ganancia flip', pt:'Lucro flip' },
  'item.last_updated':  { en:'Last Updated', tr:'Son Güncelleme', ja:'最終更新', ko:'최종 업데이트', 'zh-CN':'最后更新', 'zh-TW':'最後更新', vi:'Cập Nhật Lần Cuối', id:'Terakhir Diperbarui', th:'อัปเดตล่าสุด', de:'Zuletzt aktualisiert', fr:'Dernière mise à jour', es:'Última actualización', pt:'Última atualização' },
  'item.best_badge':    { en:'Best', tr:'En İyi', ja:'最良', ko:'최적', 'zh-CN':'最优', 'zh-TW':'最優', vi:'Tốt nhất', id:'Terbaik', th:'ดีสุด', de:'Bestes', fr:'Meilleur', es:'Mejor', pt:'Melhor' },
  'item.cheap_badge':   { en:'Cheapest', tr:'En Ucuz', ja:'最安', ko:'최저가', 'zh-CN':'最便宜', 'zh-TW':'最便宜', vi:'Rẻ nhất', id:'Termurah', th:'ถูกสุด', de:'Günstigste', fr:'Moins cher', es:'Más barato', pt:'Mais barato' },
  'item.no_listing':    { en:'No listing', tr:'İlan yok', ja:'出品なし', ko:'매물 없음', 'zh-CN':'无挂单', 'zh-TW':'無掛單', vi:'Không có niêm yết', id:'Tidak ada listing', th:'ไม่มีรายการ', de:'Kein Angebot', fr:'Pas d\'annonce', es:'Sin listado', pt:'Sem listagem' },
  'item.refresh':       { en:'⟳ Refresh Prices', tr:'⟳ Fiyatları Yenile', ja:'⟳ 価格を更新', ko:'⟳ 가격 새로고침', 'zh-CN':'⟳ 刷新价格', 'zh-TW':'⟳ 刷新價格', vi:'⟳ Làm Mới Giá', id:'⟳ Perbarui Harga', th:'⟳ รีเฟรชราคา', de:'⟳ Preise aktualisieren', fr:'⟳ Actualiser les prix', es:'⟳ Actualizar precios', pt:'⟳ Atualizar preços' },
  'item.loading':       { en:'Loading item data...', tr:'Öğe verisi yükleniyor...', ja:'アイテムデータを読み込み中...', ko:'아이템 데이터 로딩 중...', 'zh-CN':'正在加载物品数据...', 'zh-TW':'正在載入物品數據...', vi:'Đang tải dữ liệu vật phẩm...', id:'Memuat data item...', th:'กำลังโหลดข้อมูลไอเทม...', de:'Itemdaten werden geladen...', fr:'Chargement des données item...', es:'Cargando datos del ítem...', pt:'Carregando dados do item...' },
  'item.failed':        { en:'Failed to load item data', tr:'Öğe verisi yüklenemedi', ja:'アイテムデータの読み込みに失敗しました', ko:'아이템 데이터를 불러올 수 없습니다', 'zh-CN':'加载物品数据失败', 'zh-TW':'載入物品數據失敗', vi:'Không tải được dữ liệu vật phẩm', id:'Gagal memuat data item', th:'โหลดข้อมูลไอเทมล้มเหลว', de:'Itemdaten konnten nicht geladen werden', fr:'Échec du chargement des données item', es:'Error al cargar datos del ítem', pt:'Falha ao carregar dados do item' },
  'item.no_data':       { en:'No data', tr:'Veri yok', ja:'データなし', ko:'데이터 없음', 'zh-CN':'无数据', 'zh-TW':'無數據', vi:'Không có dữ liệu', id:'Tidak ada data', th:'ไม่มีข้อมูล', de:'Keine Daten', fr:'Pas de données', es:'Sin datos', pt:'Sem dados' },
  'item.best_sell':     { en:'Best Sell City', tr:'En İyi Satış Şehri', ja:'最良売却都市', ko:'최고 판매 도시', 'zh-CN':'最佳卖出城市', 'zh-TW':'最佳賣出城市', vi:'Thành Phố Bán Tốt Nhất', id:'Kota Jual Terbaik', th:'เมืองขายที่ดีที่สุด', de:'Beste Verkaufsstadt', fr:'Meilleure ville de vente', es:'Mejor ciudad de venta', pt:'Melhor cidade para vender' },
  'item.cheapest_buy':  { en:'Cheapest Buy City', tr:'En Ucuz Alış Şehri', ja:'最安購入都市', ko:'최저가 구매 도시', 'zh-CN':'最便宜购买城市', 'zh-TW':'最便宜購買城市', vi:'Thành Phố Mua Rẻ Nhất', id:'Kota Beli Termurah', th:'เมืองซื้อราคาถูกสุด', de:'Günstigste Kaufstadt', fr:'Ville d\'achat la moins chère', es:'Ciudad de compra más barata', pt:'Cidade de compra mais barata' },
});

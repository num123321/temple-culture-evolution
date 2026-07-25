/**
 * 历史基线数据 — 各调研地在原初创建时的状态描述
 * 对应 HistoryBaseline / SiteBaseline 组件
 */
export const historyBaselines = [
  {
    siteId: 'huayan',
    period: '辽重熙七年（1038年）',
    patron: '辽兴宗耶律宗真',
    originalFunction: '皇家敕建礼佛道场',
    spatialLayout: '坐西朝东，契丹崇日习俗；上寺大雄宝殿为礼佛主殿，下寺薄伽教藏殿为藏经与修行之所',
    worshipFlow: '山门→天王殿→大雄宝殿，中轴线严格，僧俗界限分明',
    keyEvents: [
      { year: '1038', event: '辽兴宗敕建，初名"大华严寺"' },
      { year: '1122', event: '金兵攻陷大同时部分被毁' },
      { year: '1140', event: '金代重修，依辽代格局' },
      { year: '明代', event: '分为上、下两寺' },
      { year: '2008', event: '大同古城复建工程，周边环境大幅改变' }
    ],
    summary: '辽金皇家寺院的典型代表，空间配置以礼佛为核心，僧俗界限分明，是"神圣空间"的典型形态。'
  },
  {
    siteId: 'shansi',
    period: '唐开元年间（713-741年）始建，金天会六年（1128年）重建',
    patron: '金代官方重建',
    originalFunction: '佛教寺院，兼具城市公共礼佛功能',
    spatialLayout: '中轴线：山门→三圣殿→大雄宝殿；东侧文殊阁、西侧普贤阁对称布局',
    worshipFlow: '沿中轴线递进，从世俗到神圣的空间序列',
    keyEvents: [
      { year: '713', event: '唐开元年间始建，名"开元寺"' },
      { year: '1128', event: '金天会六年大规模重建' },
      { year: '1445', event: '明代改称"善化寺"' },
      { year: '近代', event: '梁思成、林徽因考察，誉为"辽金建筑博物馆"' }
    ],
    summary: '与华严寺同属辽金寺院体系，但体量更小，布局更紧凑。两寺对比可揭示同期同地寺院的微观差异。'
  },
  {
    siteId: 'yungang',
    period: '北魏和平元年（460年）',
    patron: '北魏文成帝拓跋濬，沙门统昙曜主持',
    originalFunction: '皇家石窟工程，"帝王即佛"的政教合一空间',
    spatialLayout: '武周山南麓东西绵延约1公里，早中晚三期依次排列',
    worshipFlow: '早期（昙曜五窟）：帝王即佛，"神位"巅峰；中期：双窟制，皇家功德窟；晚期：小型龛窟，民间参与增多',
    keyEvents: [
      { year: '460', event: '昙曜主持开凿五窟（第16-20窟）' },
      { year: '471-494', event: '中期洞窟密集开凿，双窟制出现' },
      { year: '494', event: '北魏迁都洛阳，云冈大规模营建终止' },
      { year: '494-525', event: '晚期小型龛窟，民间力量主导' },
      { year: '2001', event: '列入世界文化遗产名录' }
    ],
    summary: '从北魏皇家工程到晚期民间造像，云冈本身就是"神圣→世俗"演变过程的物质见证。三期洞窟的对比直接呈现了这一趋势。'
  },
  {
    siteId: 'xuankong',
    period: '北魏太和十五年（491年）',
    patron: '北魏孝文帝时期，据传由了然道长创建',
    originalFunction: '三教合一修行空间，兼有军事瞭望功能',
    spatialLayout: '依附恒山翠屏峰绝壁，以横梁插入岩壁支撑，楼阁悬挑',
    worshipFlow: '由南向北：佛殿区→三教殿→道观区，三教在空间中平行并置',
    keyEvents: [
      { year: '491', event: '北魏太和年间始建' },
      { year: '唐代', event: '大规模扩建，三教殿成型' },
      { year: '金代', event: '重修，基本奠定今日格局' },
      { year: '明清', event: '多次修缮，以木结构为主' },
      { year: '1982', event: '列入全国重点文物保护单位' },
      { year: '2010', event: '入选《时代周刊》世界十大奇险建筑' }
    ],
    summary: '悬空寺自创建之初就携带"三教合一"基因，空间上儒释道并置。这种先天"世俗化"结构使其与华严寺、云冈形成鲜明对比。'
  }
]

export const getBaselineBySiteId = (id) => historyBaselines.find(b => b.siteId === id)
export const getAllBaselines = () => historyBaselines

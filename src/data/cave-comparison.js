/**
 * 云冈石窟洞窟对比数据 — 早中晚三期演变
 * 对应 CaveComparison 组件
 */
export const cavePeriods = [
  {
    id: 'early',
    name: '早期（昙曜五窟）',
    period: '460-470年',
    caves: '第16-20窟',
    patron: '北魏皇室',
    characteristics: {
      style: '雄浑刚健，受犍陀罗与印度笈多风格影响',
      scale: '巨型造像（主尊高13-17米），洞窟单体独立',
      theme: '帝王即佛，政教合一',
      layout: '马蹄形平面，穹窿顶，主尊占绝对主导',
      iconography: '三世佛（过去燃灯、现在释迦、未来弥勒）'
    },
    keyCaves: [
      { number: '16', feature: '主尊为释迦立像，青年帝王面容' },
      { number: '17', feature: '交脚弥勒菩萨，象征未成佛的未来佛' },
      { number: '18', feature: '千佛袈裟，主尊身披刻有千佛的袈裟' },
      { number: '19', feature: '主尊坐佛，窟外两侧有耳洞' },
      { number: '20', feature: '露天大佛，云冈标志性形象，结跏趺坐' }
    ],
    significance: '"神位"巅峰：帝王即佛，石窟是君王的神圣投影',
    photos: []
  },
  {
    id: 'middle',
    name: '中期（双窟时代）',
    period: '471-494年',
    caves: '第1-3、5-13窟',
    patron: '北魏皇室及贵族',
    characteristics: {
      style: '汉化加深，精细繁复，褒衣博带',
      scale: '中大型，双窟/组窟组合',
      theme: '佛国世界全景，兼容华夷',
      layout: '前室后室或中心塔柱式，多室组合',
      iconography: '内容极大丰富：本生故事、佛传、维摩诘经变、供养人行列'
    },
    keyCaves: [
      { number: '5', feature: '主尊坐佛高17米，为云冈最高造像' },
      { number: '6', feature: '中心塔柱窟，四壁浮雕佛传故事33幅' },
      { number: '7-8', feature: '双窟组合，雕刻繁复精美' },
      { number: '9-10', feature: '前廊后室，汉式建筑元素显著' },
      { number: '12', feature: '"音乐窟"，雕刻大量伎乐天' }
    ],
    significance: '汉化转折：佛教艺术加速汉化，"人间化"趋势初现',
    photos: []
  },
  {
    id: 'late',
    name: '晚期（民间造像期）',
    period: '494-525年',
    caves: '第4、14、15窟及西部小窟群',
    patron: '民间信众、中下层官吏',
    characteristics: {
      style: '清秀瘦削，"秀骨清像"',
      scale: '小型龛窟为主',
      theme: '个人功德，祈求福报',
      layout: '小型独立龛窟，无统一规划',
      iconography: '以释迦、弥勒、观音为主，程式化倾向'
    },
    keyCaves: [
      { number: '15', feature: '"万佛洞"，壁面密布小型坐佛' },
      { number: '西部小窟群', feature: '民间自发开凿，大小不一，错落分布' }
    ],
    significance: '"人位"崛起：民间力量主导，石窟从皇家功德变为个人信仰投资',
    photos: []
  }
]

export const getCavePeriods = () => cavePeriods
export const getCavePeriodById = (id) => cavePeriods.find(p => p.id === id)

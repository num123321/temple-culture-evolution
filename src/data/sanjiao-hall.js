/**
 * 悬空寺三教殿专题数据
 * 对应 SanjiaoHall 组件
 */
export const sanjiaoHall = {
  name: '三教殿',
  location: '悬空寺中层核心位置',
  description: '三教殿是全国唯一同时供奉儒释道三教创始人的殿堂，体现了中国宗教史上独特的"三教合一"理念。',
  layout: {
    totalArea: '约15平方米',
    arrangement: '品字形三龛并置，正面三龛等大',
    orientation: '坐北朝南（依崖壁朝向）'
  },
  statues: [
    {
      religion: '佛教',
      figure: '释迦牟尼',
      position: '正中',
      description: '结跏趺坐于须弥座，禅定印，面容安详',
      photos: []
    },
    {
      religion: '儒教',
      figure: '孔子',
      position: '左侧（东）',
      description: '身着儒服，手持笏板，端坐姿态',
      photos: []
    },
    {
      religion: '道教',
      figure: '老子',
      position: '右侧（西）',
      description: '道家装束，手持如意，仙风道骨',
      photos: []
    }
  ],
  significance: [
    '三教等量并置：空间上无等级高低之分，三龛尺寸一致',
    '中轴对称：释迦居中，与其在传统认知中的主导地位一致',
    '三教合一的空间表达：将观念层面的"合一"转化为物质空间中的"并置"',
    '对比华严寺、云冈：前者是单一佛教空间，后者是从"神位"走向"人位"，悬空寺先天就是"多元"的'
  ],
  interviewHighlights: [],
  photos: []
}

export const getSanjiaoHallData = () => sanjiaoHall

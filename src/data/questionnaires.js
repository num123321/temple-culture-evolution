/**
 * 问卷数据
 * 对应 DataFindings 组件中的数据展示
 */
export const questionnaireData = {
  title: '游客与信众问卷调查',
  surveyDate: 'Day 3-6',
  totalResponses: 0,
  locations: ['华严寺', '云冈石窟', '悬空寺'],
  questions: [
    {
      id: 'q1',
      text: '您来此地的主要目的是？',
      type: 'single',
      options: ['朝圣/礼佛', '旅游观光', '学术研究', '陪同他人', '其他'],
      results: {}
    },
    {
      id: 'q2',
      text: '您认为这里最吸引您的是？',
      type: 'multiple',
      options: ['建筑艺术', '宗教氛围', '历史文化', '自然景观', '拍照打卡'],
      results: {}
    },
    {
      id: 'q3',
      text: '您知道这里的历史背景吗？',
      type: 'single',
      options: ['非常了解', '大致了解', '不太了解', '完全不了解'],
      results: {}
    },
    {
      id: 'q4',
      text: '如果有机会，您愿意深入了解寺庙的历史文化吗？',
      type: 'single',
      options: ['非常愿意', '比较愿意', '一般', '不太愿意'],
      results: {}
    }
  ],
  demographics: {
    ageGroups: [],
    education: [],
    origin: []
  }
}

export const getQuestionnaireData = () => questionnaireData

/**
 * 问卷数据
 * 对应 DataFindings 组件中的数据展示
 *
 * 数据为大同实地问卷实测（50 人有效回收）。
 * 单选 results 之和=回收人数；多选（第 2 题）results 为“选择该选项的人数”，
 * 条形宽度按“选择率 = 人数 / 回收总数”计算。
 */
export const questionnaireData = {
  title: '游客与信众问卷调查',
  surveyDate: 'Day 2-4',
  totalResponses: 50,
  locations: ['华严寺', '云冈石窟', '悬空寺'],
  questions: [
    {
      id: 'q1',
      text: '您来此地的主要目的是？',
      type: 'single',
      options: ['朝圣/礼佛', '旅游观光', '学术研究', '陪同他人', '其他'],
      results: {
        '朝圣/礼佛': 9,
        '旅游观光': 30,
        '学术研究': 2,
        '陪同他人': 6,
        '其他': 3
      }
    },
    {
      id: 'q2',
      text: '您认为这里最吸引您的是？',
      type: 'multiple',
      options: ['建筑艺术', '宗教氛围', '历史文化', '自然景观', '拍照打卡'],
      results: {
        '建筑艺术': 34,
        '宗教氛围': 16,
        '历史文化': 28,
        '自然景观': 12,
        '拍照打卡': 22
      }
    },
    {
      id: 'q3',
      text: '您知道这里的历史背景吗？',
      type: 'single',
      options: ['非常了解', '大致了解', '不太了解', '完全不了解'],
      results: {
        '非常了解': 6,
        '大致了解': 24,
        '不太了解': 16,
        '完全不了解': 4
      }
    },
    {
      id: 'q4',
      text: '如果有机会，您愿意深入了解寺庙的历史文化吗？',
      type: 'single',
      options: ['非常愿意', '比较愿意', '一般', '不太愿意'],
      results: {
        '非常愿意': 24,
        '比较愿意': 16,
        '一般': 8,
        '不太愿意': 2
      }
    }
  ]
}

export const getQuestionnaireData = () => questionnaireData

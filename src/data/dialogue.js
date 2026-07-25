/**
 * 声音与数据的对话映射
 * 对应 DialogueView 组件 — 将口述质性材料与量化数据并置展示
 */
export const dialogues = [
  {
    id: 'd1',
    title: '"没人拜佛了" vs 游客量数据',
    oralExcerpt: {
      interviewee: '张大爷',
      quote: '[待填入口述原文]',
      context: '云冈村村民对云冈石窟的看法'
    },
    dataEvidence: {
      type: 'visitor_survey',
      description: '旅游目的问卷调查结果',
      finding: '[待填入数据发现]'
    },
    tension: {
      description: '[待填入张力分析]',
      resolution: '[待填入综合解释]'
    }
  },
  {
    id: 'd2',
    title: '"以前这儿就是咱村的地" vs 空间功能演变',
    oralExcerpt: {
      interviewee: '李阿姨',
      quote: '[待填入口述原文]',
      context: '景区商贩对空间历史的理解'
    },
    dataEvidence: {
      type: 'spatial_analysis',
      description: '平面图功能热区对比（古今）',
      finding: '[待填入数据发现]'
    },
    tension: {
      description: '[待填入张力分析]',
      resolution: '[待填入综合解释]'
    }
  },
  {
    id: 'd3',
    title: '\"小时候还去烧香\" vs 三教殿使用现状',
    oralExcerpt: {
      interviewee: '刘奶奶',
      quote: '[待填入口述原文]',
      context: '浑源老人回忆寺庙民俗功能'
    },
    dataEvidence: {
      type: 'field_observation',
      description: '三教殿参观行为观察记录',
      finding: '[待填入数据发现]'
    },
    tension: {
      description: '[待填入张力分析]',
      resolution: '[待填入综合解释]'
    }
  }
]

export const getAllDialogues = () => dialogues
export const getDialogueById = (id) => dialogues.find(d => d.id === id)

/**
 * 声音与数据的对话映射
 * 对应 DialogueView 组件 — 将口述质性材料与量化数据并置展示
 *
 * 每组的「对话问题」为简洁干练的点题提问；
 * 张力命题先行放一句干练判断，口述原文 / 数据发现 / 综合解释仍待实地材料回填。
 */
export const dialogues = [
  {
    id: 'd1',
    title: '香火渐冷 · 人潮愈热',
    question: '香火淡了——是不信，还是不来？',
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
      description: '同一座寺里，"信"在退场，"游"在进场。',
      resolution: '[待填入综合解释]'
    }
  },
  {
    id: 'd2',
    title: '村地记忆 · 景区现实',
    question: '从前是咱村的地，如今成了谁的景？',
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
      description: '空间的"权属"变了，记忆里的"归属"却还留在村里。',
      resolution: '[待填入综合解释]'
    }
  },
  {
    id: 'd3',
    title: '香火记忆 · 消费现场',
    question: '烧香，如今是心愿，还是消遣？',
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
      description: '"烧香"从婚丧嫁娶的日常礼俗，退成景区里被观看的符号。',
      resolution: '[待填入综合解释]'
    }
  }
]

export const getAllDialogues = () => dialogues
export const getDialogueById = (id) => dialogues.find(d => d.id === id)

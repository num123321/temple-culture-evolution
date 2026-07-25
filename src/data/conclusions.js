/**
 * 研究手记 — 核心判断与研究局限
 * 对应 ResearchConclusion / KeyFindings / Limitations 组件
 */
export const conclusions = {
  keyFindings: [
    {
      level: '空间配置层面',
      title: '从"神位"到"人位"的空间重组',
      finding: '[待填入]',
      evidence: ['华严寺与云冈早期：礼佛空间为主导', '云冈晚期与悬空寺：多元功能并置', '当代：旅游设施嵌入神圣空间'],
      confidence: '中'
    },
    {
      level: '使用行为层面',
      title: '香客→游客的行为模式转变',
      finding: '[待填入]',
      evidence: ['游客行为观察数据', '商贩口述', '寺院管理方访谈'],
      confidence: '中'
    },
    {
      level: '公众认知层面',
      title: '从信仰认同到文化消费',
      finding: '[待填入]',
      evidence: ['问卷数据显示文化目的超过宗教目的', '口述材料中"烧香"记忆的稀缺化', '碑刻题记与口述记忆的对话'],
      confidence: '低-中'
    }
  ],
  limitations: [
    {
      category: '时间范围',
      description: '调研仅持续六天，对每个调研点的观察时间有限，难以捕捉长期变化趋势。',
      impact: '演变脉络的精细度不足',
      mitigation: '通过历史文献补充长时段趋势'
    },
    {
      category: '空间范围',
      description: '仅覆盖大同-浑源区域的四处调研点，不具备广泛代表性。',
      impact: '结论不宜推广至其他地区佛寺',
      mitigation: '研究定位为"个案深度"而非"面上广度"'
    },
    {
      category: '样本数量',
      description: '口述访谈样本有限（6人），问卷回收量有待增加。',
      impact: '量化分析的统计效力不足',
      mitigation: '强调研究的探索性与假说生成性质'
    },
    {
      category: '文献可及性',
      description: '部分碑刻文字漫漶难辨，地方志等文献资料的获取受限于调研时间。',
      impact: '文献证据链不够完整',
      mitigation: '标注存疑，留待后续考证'
    },
    {
      category: '研究者立场',
      description: '作为外来观察者，对地方文化的理解可能存在偏差。',
      impact: '解读的客观性需要警惕',
      mitigation: '多源证据交叉验证'
    }
  ],
  nextSteps: [
    '补充文献考证，特别是地方志与寺院档案',
    '扩大口述访谈样本，追踪关键报道人',
    '与宗教社会学、建筑史学者交叉验证',
    '探索跨区域比较（如五台山佛寺群）'
  ]
}

export const getConclusions = () => conclusions
export const getKeyFindings = () => conclusions.keyFindings
export const getLimitations = () => conclusions.limitations
export const getNextSteps = () => conclusions.nextSteps

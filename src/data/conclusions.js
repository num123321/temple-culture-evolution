/**
 * 研究手记 — 核心判断与研究局限
 * 对应 ResearchConclusion / KeyFindings / Limitations 组件
 */
export const conclusions = {
  keyFindings: [
    {
      level: '空间配置层面',
      title: '从"神位"到"人位"的空间重组',
      finding: '四座寺窟的空间结构呈现从"以佛事为核心的单一神圣场域"向"宗教与公共功能并置的复合场域"的整体重组：云冈早期昙曜五窟以"帝王即佛"的巨像为绝对中心，晚期民间小龛与悬空寺则转为面向大众的观览组织；华严寺、善化寺的礼佛殿堂虽被保留，却已被殿前广场、旅游动线与商业配套层层环绕。"神位"并未消失，而是退居为被环绕、被展示的空间节点。',
      evidence: ['华严寺与云冈早期：礼佛空间为主导', '云冈晚期与悬空寺：多元功能并置', '当代：旅游设施嵌入神圣空间'],
      confidence: '中'
    },
    {
      level: '使用行为层面',
      title: '香客→游客的行为模式转变',
      finding: '场所的主要使用者已由专程礼佛的"香客"转变为观光、研学、打卡等多元目的的"游客"：本地老人普遍追忆旧时"来烧香、求平安"的场景，商贩与周边从业者则描述"现在什么样的人都来了"；问卷中旅游观光（30/50）亦远超朝圣礼佛（9/50）。宗教行为趋于节庆化、少数化，空间越来越多地被"观看"而非被"礼拜"。',
      evidence: ['游客行为观察数据', '商贩口述', '寺院管理方访谈'],
      confidence: '中'
    },
    {
      level: '公众认知层面',
      title: '从信仰认同到文化消费',
      finding: '公众对佛寺的认知重心已由"信仰认同"转向"文化消费"：问卷中建筑艺术（34）与历史文化（28）的吸引力显著高于宗教氛围（16），但仍有 40/50 的人愿意深入了解其历史文化——深层的历史情感与"求平安"的心理并未消失，而是被"文化化"地延续与转译。碑刻题记中的功德愿心与今日游客的参观心愿，形成跨越时空的隔代对话。',
      evidence: ['问卷数据显示文化目的超过宗教目的', '口述材料中"烧香"记忆的稀缺化', '碑刻题记与口述记忆的对话'],
      confidence: '低-中'
    }
  ],
  limitations: [
    {
      category: '时间范围',
      description: '调研仅持续四天，对每个调研点的观察时间有限，难以捕捉长期变化趋势。',
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
      description: '口述访谈样本有限（5人），问卷回收量有待增加。',
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
  ]
}

export const getConclusions = () => conclusions
export const getKeyFindings = () => conclusions.keyFindings
export const getLimitations = () => conclusions.limitations

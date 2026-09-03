/**
 * 寻常之人 · 千年之寺（原“声音与数据的对话”）
 * 对应 DialogueView 组件
 *
 * 说明：本模块没有量化数据，呈现的是香客之外、普通人对佛寺变迁的
 * 主观看法。每组=一个议题，下列两位（或以上）普通人的原声观点对照；
 * voices[].quote 为采访字幕真实原话（作口语化清理），slug 对应「采访实录」播放器。
 * note 为“众声之间”的编者归纳，只作视角梳理，不作量化断言。
 */
export const dialogues = [
  {
    id: 'd1',
    title: '香火渐冷 · 人潮愈热',
    question: '人多了、烧香少了——寺，还是从前那座寺吗？',
    voices: [
      {
        person: '本地大娘',
        role: '大同本地人',
        quote: '以前的老百姓来这些古迹，好多都是来烧香的；现在呢，什么样的人都来了。',
        slug: 'elder'
      },
      {
        person: '外地游客',
        role: '首次到访大同',
        quote: '商业化会不会冲淡氛围？我觉得不会——关键是要有特色，别千篇一律。',
        slug: 'visitor'
      }
    ],
    note: '老人记得香客的虔诚，游客期待景区的特色——同是“寺里走一遭”，两人念的并不是同一件事。'
  },
  {
    id: 'd2',
    title: '村地记忆 · 景区现实',
    question: '天天相伴的千年古寺，本地人怎么过它？',
    voices: [
      {
        person: '景区店员',
        role: '古城餐饮从业者',
        quote: '我们基本上从小就在那地方玩的。以前是去烧香、感受氛围，现在世界各地的游客都来了。',
        slug: 'shopkeeper'
      },
      {
        person: '环卫大爷',
        role: '环卫工人',
        quote: '云冈石窟和华严寺？我工作忙，没去过。',
        slug: 'cleaner'
      }
    ],
    note: '一个把寺当“生活场”做了半辈子生意，一个天天路过却从不进去——本地人看“身边的历史”，也有亲疏两面。'
  },
  {
    id: 'd3',
    title: '香火记忆 · 消费现场',
    question: '走进寺门，如今更像许愿，还是像逛逛？',
    voices: [
      {
        person: '本地大娘',
        role: '大同本地人',
        quote: '过去和现在的心是一样的，都是求菩萨保佑平安、保佑健康。',
        slug: 'elder'
      },
      {
        person: '路边小贩',
        role: '华严寺旁摆摊',
        quote: '咱们普通老百姓，多转转、多玩玩，慢慢就了解了。',
        slug: 'vendor'
      }
    ],
    note: '求愿的心没变，走近它的方式却变了——有人把心愿说给菩萨，有人把它看进相册、摆上货摊。'
  }
]

export const getAllDialogues = () => dialogues
export const getDialogueById = (id) => dialogues.find(d => d.id === id)

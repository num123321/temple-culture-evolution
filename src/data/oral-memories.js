/**
 * 口述记忆数据
 * 对应 OralArchive / MemoryCard 组件
 */
export const oralMemories = [
  {
    id: 'oral-1',
    date: 'Day 4',
    location: '云冈镇云冈村',
    interviewee: '张大爷（化名）',
    role: '当地村民，70岁',
    audioFile: 'villager-01.mp3',
    transcription: '',
    theme: '石窟与村庄的关系变迁',
    summary: '讲述云冈石窟从"我们村的后山"到"世界文化遗产"的感知变化。',
    quotes: [],
    tags: ['云冈', '村民', '地方感'],
    question: '在您心里，云冈石窟是"村里的后山"，还是"世界遗产"？'
  },
  {
    id: 'oral-2',
    date: 'Day 4',
    location: '云冈石窟景区外',
    interviewee: '李阿姨（化名）',
    role: '纪念品摊贩，55岁',
    audioFile: 'vendor-01.mp3',
    transcription: '',
    theme: '旅游经济对本地生活的影响',
    summary: '作为景区商贩，讲述旅游开发十余年来生计的变化与对石窟的态度。',
    quotes: [],
    tags: ['云冈', '商贩', '旅游经济'],
    question: '景区开起来这十几年，您家的日子变了吗？'
  },
  {
    id: 'oral-3',
    date: 'Day 5',
    location: '悬空寺景区外',
    interviewee: '王叔（化名）',
    role: '周边村民，60岁',
    audioFile: 'villager-02.mp3',
    transcription: '',
    theme: '悬空寺在本地人心中的位置',
    summary: '讲述从小看悬空寺长大的记忆，以及开发旅游前后态度的变化。',
    quotes: [],
    tags: ['悬空寺', '村民', '地方记忆'],
    question: '在您心里，悬空寺是景点，还是从小看着长大的那座寺？'
  },
  {
    id: 'oral-4',
    date: 'Day 6',
    location: '浑源县',
    interviewee: '赵爷爷（化名）',
    role: '当地老人，78岁',
    audioFile: 'elder-01.mp3',
    transcription: '',
    theme: '恒山庙宇群的兴衰记忆',
    summary: '回忆几十年前恒山周边寺院的状况，当时还没有大规模旅游开发。',
    quotes: [],
    tags: ['悬空寺', '老人', '历史记忆'],
    question: '几十年前没开发那会儿，恒山边上是什么样子？'
  },
  {
    id: 'oral-5',
    date: 'Day 6',
    location: '浑源县',
    interviewee: '刘奶奶（化名）',
    role: '当地老人，82岁',
    audioFile: 'elder-02.mp3',
    transcription: '',
    theme: '寺庙与日常生活',
    summary: '讲述年轻时去寺里烧香的经历，以及寺庙在婚丧嫁娶中的角色。',
    quotes: [],
    tags: ['悬空寺', '老人', '民俗'],
    question: '您年轻时去寺里，多半是为着什么事去的？'
  },
  {
    id: 'oral-6',
    date: 'Day 6',
    location: '浑源县',
    interviewee: '孙伯（化名）',
    role: '退休教师，75岁',
    audioFile: 'elder-03.mp3',
    transcription: '',
    theme: '寺庙文化的历史沿革',
    summary: '作为本地知识分子，提供更系统的悬空寺历史认知。',
    quotes: [],
    tags: ['悬空寺', '老人', '地方志'],
    question: '如果只许一句，您会怎么讲悬空寺的"三教合一"？'
  },
  {
    id: 'oral-7',
    date: 'Day 3-6',
    location: '大同古城',
    interviewee: '外地游客（化名）',
    role: '首次到访大同的游客',
    audioFile: '',
    transcription: '',
    theme: '游客对古城与商业化的初印象',
    summary: '刚到古都、尚未入园的游客视角：直率指出城墙与街景"匹配度不高"、修缮缺"修旧如旧"；认为商业化未必冲淡氛围，真正怕的是"千篇一律、没有特色"。',
    quotes: [
      '我感觉这个城墙和周围的环境，匹配度不是很高。',
      '很多景点都千篇一律，感觉没什么差异化。',
      '商业化会不会冲淡氛围？我觉得不会，关键是要有特色。'
    ],
    tags: ['游客', '商业化', '大同古城'],
    question: '来之前，您对云冈这类佛教遗存了解吗？',
    interviewSlug: 'visitor'
  },
  {
    id: 'oral-8',
    date: 'Day 3-6',
    location: '华严寺周边',
    interviewee: '景区店员（化名）',
    role: '本地人 · 奶茶餐饮从业者',
    audioFile: '',
    transcription: '',
    theme: '本地生意人眼中的商业化',
    summary: '在华严寺一带做生意的本地青年：从小在寺旁长大、见过旧时香客烧香到如今全球游客的变迁；以古城物价反驳"过度商业化"之说，希望把古城再完善、让更多人愿意来大同。',
    quotes: [
      '云冈石窟本身就是一千五百多年的文物，变的只是景区。',
      '大同其实离商业化还远——古城里吃碗面也就十来块钱。',
      '我觉得保持现状就挺好。'
    ],
    tags: ['本地人', '商业化', '华严寺'],
    question: '这儿的云冈、华严寺一带，以前和现在变化大吗？',
    interviewSlug: 'shopkeeper'
  },
  {
    id: 'oral-9',
    date: 'Day 3-6',
    location: '大同市区',
    interviewee: '本地大娘（化名）',
    role: '大同市民',
    audioFile: '',
    transcription: '',
    theme: '以耿市长为界的大同新旧交替',
    summary: '长时段城市记忆：过去来古迹多为烧香求平安，如今各种人都有、景区翻新、宣传更好；认为"求平安的心没变"，人的素质与审美则明显提升。',
    quotes: [
      '以前老百姓来这些古迹，好多都是来烧香的。',
      '过去和现在的心是一样的，都是求菩萨保佑平安、保佑健康。',
      '现在人的素质和审美都提高了，是一种文化的提升。'
    ],
    tags: ['本地人', '城市记忆', '大同'],
    question: '以前的大同古城和华严寺一带，和现在区别大吗？',
    interviewSlug: 'elder'
  },
  {
    id: 'oral-10',
    date: 'Day 3-6',
    location: '云冈石窟景区外',
    interviewee: '环卫大爷（化名）',
    role: '本地人 · 环卫工人',
    audioFile: '',
    transcription: '',
    theme: '在景区旁工作却从没进过的本地人',
    summary: '一个特殊的本地样本：天天在云冈周边工作却没进去看过；对商业化持完全正面态度，认为它与宗教氛围互不干扰，也欢迎"感受历史"与"纯玩"两类游客。',
    quotes: [
      '云冈石窟和华严寺？我工作忙，没去过。',
      '商业化是好事啊，不影响这边的氛围。',
      '感受历史的也好、纯玩的也好，这两样都不赖。'
    ],
    tags: ['云冈', '本地人', '商业化'],
    question: '以本地人视角看，景区商业化是好事还是坏事？',
    interviewSlug: 'cleaner'
  },
  {
    id: 'oral-11',
    date: 'Day 3-6',
    location: '华严寺周边',
    interviewee: '路边小贩（化名）',
    role: '华严寺一带摆摊',
    audioFile: '',
    transcription: '',
    theme: '小贩眼中的商业与保护',
    summary: '最贴近庙门的商贩逻辑：文化与商业相互促进，"有商业就有资金"才能保护文物；对普通人如何亲近文化遗产给出最朴素的建议——多转转、多玩玩，慢慢就懂了。',
    quotes: [
      '文化和商业应该是相互促进的。',
      '有商业就会有资金，肯定能保护文化。',
      '咱们普通老百姓，多转转、多玩玩，慢慢就了解了。'
    ],
    tags: ['华严寺', '小贩', '商业与保护'],
    question: '文化传承和商业开发，您觉得是什么关系？',
    interviewSlug: 'vendor'
  }
]

export const getOralByLocation = (location) =>
  oralMemories.filter(m => m.location.includes(location))

export const getOralByTag = (tag) =>
  oralMemories.filter(m => m.tags.includes(tag))

export const getAllOralMemories = () => oralMemories

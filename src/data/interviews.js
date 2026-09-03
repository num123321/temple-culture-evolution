/**
 * 采访实录数据（5 段“伪视频”：录音 + 配图 + SRT 字幕）
 * 对应 InterviewPlayer 组件（「采访实录」区块）
 * 素材位置：public/audio/interviews / public/images/interviews / public/srt
 */
export const interviews = [
  {
    id: 'visitor',
    person: '外地游客',
    role: '游客 · 首次到访大同',
    place: '大同古城',
    title: '古城初印象：修旧，还是修新？',
    audio: 'audio/interviews/visitor.mp3',
    image: 'images/interviews/visitor/01.jpg',
    srt: 'srt/visitor.srt',
    point: '城墙与街景“匹配度不高”；商业不冲淡氛围，怕的是千篇一律。',
    tags: ['游客', '商业化', '古都初印象']
  },
  {
    id: 'shopkeeper',
    person: '景区店员',
    role: '本地人 · 古城餐饮从业者',
    place: '华严寺周边',
    title: '本地生意人的“商业化”账',
    audio: 'audio/interviews/shopkeeper.mp3',
    image: 'images/interviews/shopkeeper/01.jpg',
    srt: 'srt/shopkeeper.srt',
    point: '大同其实“不算商业化”；保持现状就好，盼把古城再完善。',
    tags: ['本地人', '商业化', '文旅经济']
  },
  {
    id: 'elder',
    person: '本地大娘',
    role: '大同市民',
    place: '大同市区',
    title: '以耿市长为界的大同变迁',
    audio: 'audio/interviews/elder.mp3',
    image: 'images/interviews/elder/01.jpg',
    srt: 'srt/elder.srt',
    point: '以前来古迹多是为烧香求平安；如今心没变，人的素质与认知在涨。',
    tags: ['本地人', '城市记忆', '烧香与祈福']
  },
  {
    id: 'cleaner',
    person: '环卫大爷',
    role: '本地人 · 环卫工人',
    place: '云冈石窟景区外',
    title: '天天路过，却从没进去过',
    audio: 'audio/interviews/cleaner.mp3',
    image: 'images/interviews/cleaner/01.jpg',
    srt: 'srt/cleaner.srt',
    point: '自家景点因工作忙没逛过；商业与氛围两不相扰，“都好”。',
    tags: ['本地人', '商业化', '旁观者']
  },
  {
    id: 'vendor',
    person: '路边小贩',
    role: '华严寺一带摆摊',
    place: '华严寺周边',
    title: '有商业，才有保护的钱',
    audio: 'audio/interviews/vendor.mp3',
    image: 'images/interviews/vendor/01.jpg',
    srt: 'srt/vendor.srt',
    point: '文化与商业相互促进；多转多看，文化才能慢慢被了解。',
    tags: ['小贩', '商业与保护', '文化传播']
  }
]

export const getAllInterviews = () => interviews
export const getInterviewById = (id) => interviews.find((i) => i.id === id)

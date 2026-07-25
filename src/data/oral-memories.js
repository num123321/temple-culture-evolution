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
    tags: ['云冈', '村民', '地方感']
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
    tags: ['云冈', '商贩', '旅游经济']
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
    tags: ['悬空寺', '村民', '地方记忆']
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
    tags: ['悬空寺', '老人', '历史记忆']
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
    tags: ['悬空寺', '老人', '民俗']
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
    tags: ['悬空寺', '老人', '地方志']
  }
]

export const getOralByLocation = (location) =>
  oralMemories.filter(m => m.location.includes(location))

export const getOralByTag = (tag) =>
  oralMemories.filter(m => m.tags.includes(tag))

export const getAllOralMemories = () => oralMemories

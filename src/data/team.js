/**
 * 团队成员数据
 * 对应 TeamGrid / TeamMember 组件
 */
export const teamMembers = [
  {
    id: 'member-1',
    name: '岳逸航',
    role: '组长',
    responsibility: '统筹协调、研究设计',
    avatar: '/temple-culture-evolution/images/team/yue-yihang.jpg',
    bio: '电子信息大一学生，热爱历史与文化，喜欢通过田野调研的方式探索人文现象。'
  },
  {
    id: 'member-2',
    name: '方研',
    role: '成员',
    responsibility: '田野记录、影像拍摄',
    avatar: '/temple-culture-evolution/images/team/fang-yan.jpg',
    bio: '电子信息大一学生，喜欢摄影和旅行，热衷于通过影像记录文化遗产与人文景观。'
  },
  {
    id: 'member-3',
    name: '张旺胜',
    role: '成员',
    responsibility: '口述访谈、文献整理',
    avatar: '/temple-culture-evolution/images/team/zhang-wangsheng.jpg',
    bio: '集成电路大一学生，兴趣广泛，喜欢通过访谈和文献研究深入了解历史文化。'
  },
  {
    id: 'member-4',
    name: '腾飞宇',
    role: '指导教师',
    responsibility: '学术指导',
    avatar: '/temple-culture-evolution/images/team/teng-feiyu.jpg',
    bio: '辅导员，提供学术指导和实践经验，帮助团队顺利开展田野调研工作。'
  }
]

export const teamInfo = {
  name: '佛寺文化演变 · 田野调研小组',
  institution: '北京邮电大学 - 电子工程学院',
  year: 2026,
  description: '一支来自北邮的社会实践小组，试图在七天的时间里，重新审视千年佛寺的空间意义。'
}

export const getTeamMembers = () => teamMembers
export const getTeamInfo = () => teamInfo

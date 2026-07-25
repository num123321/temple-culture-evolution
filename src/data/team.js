/**
 * 团队成员数据
 * 对应 TeamGrid / TeamMember 组件
 */
export const teamMembers = [
  {
    id: 'member-1',
    name: '[姓名]',
    role: '组长',
    responsibility: '统筹协调、研究设计',
    avatar: '',
    bio: ''
  },
  {
    id: 'member-2',
    name: '[姓名]',
    role: '成员',
    responsibility: '田野记录、影像拍摄',
    avatar: '',
    bio: ''
  },
  {
    id: 'member-3',
    name: '[姓名]',
    role: '成员',
    responsibility: '口述访谈、文献整理',
    avatar: '',
    bio: ''
  },
  {
    id: 'member-4',
    name: '[姓名]',
    role: '成员',
    responsibility: '空间测绘、数据可视化',
    avatar: '',
    bio: ''
  },
  {
    id: 'member-5',
    name: '[姓名]',
    role: '成员',
    responsibility: '问卷设计、数据分析',
    avatar: '',
    bio: ''
  },
  {
    id: 'member-6',
    name: '[姓名]',
    role: '指导教师',
    responsibility: '学术指导',
    avatar: '',
    bio: ''
  }
]

export const teamInfo = {
  name: '佛寺文化演变 · 田野调研小组',
  institution: '[学校/机构名称]',
  year: 2026,
  description: '一支来自[机构]的跨学科调研团队，试图在六天的时间里，重新审视千年佛寺的空间意义。'
}

export const getTeamMembers = () => teamMembers
export const getTeamInfo = () => teamInfo

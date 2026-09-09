/**
 * 行程总览数据
 * 4天田野调研的每日概要
 */
export const itinerary = [
  {
    day: 1,
    date: '2026-09-01',
    title: '抵达与准备',
    location: '大同市',
    summary: '团队抵达大同，整理装备，确认调研路线与分工',
    sites: [],
    outputs: [],
    color: '#6366f1'
  },
  {
    day: 2,
    date: '2026-09-02',
    title: '悬空寺 · 问卷',
    location: '浑源县 · 悬空寺',
    summary: '调研悬空寺空间布局与三教殿，并在景区发放游客问卷',
    sites: ['悬空寺'],
    outputs: ['悬空寺布局记录', '三教殿分析', '游客问卷发放'],
    color: '#8b5cf6'
  },
  {
    day: 3,
    date: '2026-09-03',
    title: '华严寺 · 善化寺 · 悬空寺',
    location: '大同古城 → 浑源县 · 悬空寺',
    summary: '上午调查华严寺空间功能与碑刻，顺访善化寺记录辽金格局；午后赴悬空寺开展口述访谈并补充问卷',
    sites: ['华严寺', '善化寺', '悬空寺'],
    outputs: ['华严寺空间记录', '善化寺布局记录', '碑刻题记', '口述访谈', '问卷补充'],
    color: '#f59e0b'
  },
  {
    day: 4,
    date: '2026-09-04',
    title: '云冈石窟 · 返程整理',
    location: '大同云冈石窟 → 返京',
    summary: '考察云冈石窟，返程并整理调研材料',
    sites: ['云冈石窟'],
    outputs: ['云冈石窟考察', '调研材料整理'],
    color: '#ef4444'
  }
]

export const getDayByNumber = (n) => itinerary.find(d => d.day === n)
export const getAllDays = () => itinerary

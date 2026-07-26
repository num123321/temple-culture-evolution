/**
 * 行程总览数据
 * 7天田野调研的每日概要
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
    title: '华严寺 · 善化寺',
    location: '大同古城',
    summary: '调查辽金皇家寺院的空间配置与神像系统，拍摄碑刻题记',
    sites: ['华严寺', '善化寺'],
    outputs: ['神像配置记录', '碑刻拓片/照片', '平面图热区标注', '田野笔记'],
    color: '#f59e0b'
  },
  {
    day: 3,
    date: '2026-09-03',
    title: '云冈石窟（全天）',
    location: '大同西郊武周山',
    summary: '系统性考察云冈早中晚三期洞窟，采集碑刻题记，记录游客行为',
    sites: ['云冈石窟'],
    outputs: ['洞窟对比表', '期次演变图', '碑刻题记', '游客流量观测'],
    color: '#ef4444'
  },
  {
    day: 4,
    date: '2026-09-04',
    title: '云冈周边口述',
    location: '云冈镇周边村落',
    summary: '访谈云冈周边村民与商贩，采集口述记忆',
    sites: ['云冈镇', '周边村落'],
    outputs: ['口述录音', '访谈记录', '村民记忆卡片'],
    color: '#10b981'
  },
  {
    day: 5,
    date: '2026-09-05',
    title: '悬空寺',
    location: '浑源县恒山',
    summary: '调查悬空寺空间布局，重点分析三教殿，开展游客与僧侣访谈',
    sites: ['悬空寺'],
    outputs: ['三教殿分析', '寺庙布局图', '访谈录音'],
    color: '#8b5cf6'
  },
  {
    day: 6,
    date: '2026-09-06',
    title: '悬空寺周边口述 · 资料整理',
    location: '浑源县',
    summary: '访谈当地老人，补充口述材料；整理资料，团队总结',
    sites: ['浑源县'],
    outputs: ['老人访谈', '资料汇总', '初步判断'],
    color: '#ec4899'
  },
  {
    day: 7,
    date: '2026-09-07',
    title: '返程',
    location: '山西省大同市到北京邮电大学',
    summary: '总结收获，返程回校',
    sites: [],
    outputs: [],
    color: '#3b82f6'
  }
]

export const getDayByNumber = (n) => itinerary.find(d => d.day === n)
export const getAllDays = () => itinerary

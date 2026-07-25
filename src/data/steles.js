/**
 * 碑刻题记数据
 * 对应 SteleGallery 组件
 */
export const steleRecords = [
  {
    id: 'stele-1',
    title: '大金国西京大华严寺重修薄伽教藏记',
    siteId: 'huayan',
    siteName: '华严寺',
    period: '金',
    year: '1140',
    type: '重修碑记',
    location: '薄伽教藏殿内',
    summary: '记载金代重修华严寺薄伽教藏殿的经过，涉及施主名单和功德。',
    transcription: '',
    photos: [],
    keyExcerpt: ''
  },
  {
    id: 'stele-2',
    title: '大华严寺碑',
    siteId: 'huayan',
    siteName: '华严寺',
    period: '明',
    year: '',
    type: '寺史碑',
    location: '寺内',
    summary: '',
    transcription: '',
    photos: [],
    keyExcerpt: ''
  },
  {
    id: 'stele-3',
    title: '云冈石窟碑刻题记（选录）',
    siteId: 'yungang',
    siteName: '云冈石窟',
    period: '北魏',
    year: '',
    type: '造像题记',
    location: '各窟壁面',
    summary: '云冈各期洞窟中留存的造像题记，包括帝后礼佛图、供养人题名等。',
    transcription: '',
    photos: [],
    keyExcerpt: ''
  },
  {
    id: 'stele-4',
    title: '重修悬空寺碑记',
    siteId: 'xuankong',
    siteName: '悬空寺',
    period: '明清',
    year: '',
    type: '重修碑记',
    location: '寺内',
    summary: '记载明清时期多次修缮悬空寺的经过。',
    transcription: '',
    photos: [],
    keyExcerpt: ''
  }
]

export const getStelesBySiteId = (siteId) => steleRecords.filter(s => s.siteId === siteId)
export const getAllSteles = () => steleRecords

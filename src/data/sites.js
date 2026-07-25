/**
 * 各调研地基本档案
 */
export const sites = [
  {
    id: 'huayan',
    name: '华严寺',
    nameEn: 'Huayan Temple',
    location: '大同古城西南隅',
    period: '辽（1038年始建）',
    type: '皇家寺院',
    coordinates: { lat: 40.0883, lng: 113.2928 },
    description: '辽代皇家敕建寺院，坐西朝东（契丹崇日习俗），以大雄宝殿（上寺）和薄伽教藏殿（下寺）为核心，是现存规模最大的辽金寺院建筑群之一。',
    keyFeatures: ['大雄宝殿', '薄伽教藏殿', '天宫楼阁壁藏', '五方佛配置'],
    planImage: 'huayan-plan.jpg',
    relatedDays: [2]
  },
  {
    id: 'shansi',
    name: '善化寺',
    nameEn: 'Shanhua Temple',
    location: '大同古城南门内',
    period: '唐开元年间始建，金代重建',
    type: '佛教寺院',
    coordinates: { lat: 40.0805, lng: 113.2974 },
    description: '现存布局最完整的辽金寺院之一，中轴线依次为山门、三圣殿、大雄宝殿，两侧配以普贤阁、文殊阁。',
    keyFeatures: ['大雄宝殿', '三圣殿', '普贤阁', '文殊阁', '五龙壁'],
    planImage: 'shansi-plan.jpg',
    relatedDays: [2]
  },
  {
    id: 'yungang',
    name: '云冈石窟',
    nameEn: 'Yungang Grottoes',
    location: '大同西郊武周山南麓',
    period: '北魏和平元年（460年）始凿',
    type: '皇家石窟群',
    coordinates: { lat: 40.1092, lng: 113.1256 },
    description: '世界文化遗产，中国三大石窟之一，现存主要洞窟45个，附属洞窟209个，造像51000余尊。分为早（昙曜五窟）、中、晚三期。',
    keyFeatures: ['昙曜五窟（16-20窟）', '中期双窟', '晚期小型龛窟', '碑刻题记'],
    planImage: null,
    relatedDays: [3, 4]
  },
  {
    id: 'xuankong',
    name: '悬空寺',
    nameEn: 'Hanging Temple',
    location: '浑源县恒山金龙峡',
    period: '北魏太和十五年（491年）始建',
    type: '三教合一寺院',
    coordinates: { lat: 39.6583, lng: 113.7091 },
    description: '悬于恒山峭壁之上，以"奇、悬、巧"著称。寺内同时供奉儒释道三教，三教殿是全国唯一的三教合一殿堂。',
    keyFeatures: ['三教殿', '悬空结构', '栈道系统', '三圣殿', '大雄殿'],
    planImage: 'xuankong-plan.jpg',
    relatedDays: [5, 6]
  }
]

export const getSiteById = (id) => sites.find(s => s.id === id)
export const getAllSites = () => sites

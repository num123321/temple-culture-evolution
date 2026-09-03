/**
 * 现场照片图库数据（实景影像区块）
 * ───────────────────────────────
 * 照片文件与清单由本地脚本维护：
 *   1) 把新照片放进 public/images/photos/<siteId>/（如 huayan_1.jpg）
 *   2) 运行  python scripts/photos-prep.py
 *      脚本会压缩主图、生成 thumbs/ 缩略图，并自动重写 _photo-lists.js
 * 本文件只维护站点元信息，不再手写照片数组。
 */
import { photoLists } from './_photo-lists.js'

const GALLERY_META = {
  huayan: { name: '华严寺', icon: '🏛️', intro: '辽金皇家寺院 · 大雄宝殿 · 薄伽教藏殿' },
  shansi: { name: '善化寺', icon: '🛕', intro: '布局最完整的辽金寺院 · 三圣殿 · 五龙壁' },
  yungang: { name: '云冈石窟', icon: '🗿', intro: '世界文化遗产 · 昙曜五窟 · 洞窟外景' },
  xuankong: { name: '悬空寺', icon: '🏯', intro: '恒山峭壁 · 三教殿 · 栈道' }
}

export const gallerySites = Object.keys(GALLERY_META).map((id) => ({
  id,
  ...GALLERY_META[id],
  photos: photoLists[id] || []
}))

export const getAllGallery = () => gallerySites
export const getGalleryBySiteId = (id) => gallerySites.find((s) => s.id === id)

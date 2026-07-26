/**
 * 热区数据统一出口
 */
import { huayanHotspots } from './huayan-hotspots.js'
import { shansiHotspots } from './shansi-hotspots.js'
import { xuankongHotspots } from './xuankong-hotspots.js'
import { yungangHotspots } from './yungang-hotspots.js'

export const hotspotsMap = {
  huayan: huayanHotspots,
  shansi: shansiHotspots,
  xuankong: xuankongHotspots,
  yungang: yungangHotspots
}

export const getHotspotsBySiteId = (siteId) => hotspotsMap[siteId] || []

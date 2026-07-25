/**
 * 热区数据统一出口
 */
import { huayanHotspots } from './huayan-hotspots.js'
import { shansiHotspots } from './shansi-hotspots.js'
import { xuankongHotspots } from './xuankong-hotspots.js'

export const hotspotsMap = {
  huayan: huayanHotspots,
  shansi: shansiHotspots,
  xuankong: xuankongHotspots
}

export const getHotspotsBySiteId = (siteId) => hotspotsMap[siteId] || []

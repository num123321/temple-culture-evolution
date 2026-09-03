/**
 * SRT 字幕解析工具
 * 解析标准 SRT 文本为 cue 数组：
 *   [{ start: 秒, end: 秒, text: string }, ...]
 */
export function parseSRT(text) {
  const blocks = String(text || '').replace(/\r/g, '').split(/\n\s*\n/)
  const cues = []

  for (const block of blocks) {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean)
    if (!lines.length) continue

    let i = 0
    // 跳过可选的行号
    if (/^\d+$/.test(lines[i])) i++
    if (i >= lines.length) continue

    const m = lines[i].match(
      /(\d{1,2}):(\d{2}):(\d{2})[,.](\d{1,3})\s*-->\s*(\d{1,2}):(\d{2}):(\d{2})[,.](\d{1,3})/
    )
    if (!m) continue

    const toSec = (h, mm, s, ms) => (+h) * 3600 + (+mm) * 60 + (+s) + (+ms) / 1000
    const text = lines.slice(i + 1).join(' ').trim()
    if (!text) continue

    cues.push({
      start: toSec(m[1], m[2], m[3], m[4]),
      end: toSec(m[5], m[6], m[7], m[8]),
      text
    })
  }

  return cues
}

/** 把秒格式化为 m:ss（用于进度/跳转提示） */
export function formatTime(sec) {
  if (!Number.isFinite(sec) || sec < 0) return '0:00'
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

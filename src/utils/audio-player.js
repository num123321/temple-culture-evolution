/**
 * 音频播放工具函数
 * 提供简单的 HTML5 Audio 播放控制
 */

/**
 * 创建音频播放器实例
 * @param {string} src - 音频文件路径
 * @param {Object} options - 配置选项
 * @returns {Object} 播放控制对象
 */
export function createAudioPlayer(src, options = {}) {
  const audio = new Audio(src)

  const player = {
    el: audio,
    playing: false,
    currentTime: 0,
    duration: 0,

    play() {
      audio.play().catch(err => {
        console.warn('Audio playback failed:', err)
      })
      this.playing = true
    },

    pause() {
      audio.pause()
      this.playing = false
    },

    toggle() {
      this.playing ? this.pause() : this.play()
    },

    seek(time) {
      audio.currentTime = time
    },

    setVolume(vol) {
      audio.volume = Math.max(0, Math.min(1, vol))
    },

    destroy() {
      audio.pause()
      audio.src = ''
      audio.load()
    }
  }

  audio.addEventListener('loadedmetadata', () => {
    player.duration = audio.duration
  })

  audio.addEventListener('timeupdate', () => {
    player.currentTime = audio.currentTime
  })

  audio.addEventListener('ended', () => {
    player.playing = false
    if (options.onEnded) options.onEnded()
  })

  audio.addEventListener('error', (e) => {
    console.error('Audio load error:', e)
    if (options.onError) options.onError(e)
  })

  return player
}

/**
 * 预加载音频文件
 * @param {string[]} urls - 音频文件路径数组
 * @returns {Promise[]}
 */
export function preloadAudio(urls) {
  return urls.map(url => {
    return new Promise((resolve, reject) => {
      const audio = new Audio()
      audio.preload = 'auto'
      audio.src = url
      audio.oncanplaythrough = () => resolve(url)
      audio.onerror = () => reject(url)
    })
  })
}

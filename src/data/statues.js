/**
 * 神像配置数据 — 华严寺 vs 善化寺对比
 * 对应 StatueConfig 组件
 */
export const statueComparison = {
  title: '华严寺与善化寺神像配置对比',
  sites: [
    {
      siteId: 'huayan',
      siteName: '华严寺',
      halls: [
        {
          name: '大雄宝殿（上寺）',
          statues: [
            { name: '五方佛', count: 5, position: '正中', note: '明代木雕，结跏趺坐于须弥座' },
            { name: '二十诸天', count: 20, position: '两侧', note: '明代彩塑，身体前倾15度' }
          ]
        },
        {
          name: '薄伽教藏殿（下寺）',
          statues: [
            { name: '三世佛', count: 3, position: '正中', note: '辽代彩塑' },
            { name: '弟子、菩萨、供养菩萨', count: 26, position: '环绕', note: '辽代彩塑，合掌露齿菩萨最为著名' }
          ]
        }
      ]
    },
    {
      siteId: 'shansi',
      siteName: '善化寺',
      halls: [
        {
          name: '大雄宝殿',
          statues: [
            { name: '五方佛', count: 5, position: '正中', note: '金代彩塑' },
            { name: '弟子及胁侍菩萨', count: 4, position: '两侧', note: '金代彩塑' },
            { name: '二十四诸天', count: 24, position: '壁面', note: '金代彩塑，体量宏大' }
          ]
        },
        {
          name: '三圣殿',
          statues: [
            { name: '华严三圣', count: 3, position: '正中', note: '毗卢遮那佛、文殊、普贤，金代彩塑' }
          ]
        }
      ]
    }
  ],
  comparisonNotes: [
    '两寺大雄宝殿均为五方佛配置，但华严寺护法神为二十诸天，善化寺为二十四诸天',
    '善化寺多出一座三圣殿，供奉华严三圣，体现"显密圆融"',
    '华严寺薄伽教藏殿辽代彩塑年代更早，艺术价值更高'
  ]
}

export const getStatueComparison = () => statueComparison

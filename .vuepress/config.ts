import { defaultTheme } from '@vuepress/theme-default'

export default ({
  lang: 'zh-CN',
  title: '云听音乐预览版',
  description: '云听音乐',
  theme: defaultTheme({
    navbar: [
      {text: '官网首页', link: '/'},
      {text: 'Github', link: 'https://github.com/yichen9247/'},
      {text: '运营数据', link: 'https://xiaokolomi.cn/cloudlisten/preview/'},
      {text: '下载地址', link: 'https://cloudlisten.yunair.cn/docs/download.html'}
    ],
    sidebar: [
      {text: '软件介绍',link: '/docs/'},
      '/docs/download.md',
      '/docs/sponsorour.md',
      '/docs/privacy-policy.md'
    ],
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
    },
  }),
  repo: 'https://github.com/yichen9247/Randmusic',
})
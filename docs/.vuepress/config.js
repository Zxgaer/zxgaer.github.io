module.exports = {
  title: 'GameTest中文文档',
  description: 'GameTest非官方中文文档',
themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'Zxgaer', 
                items: [
                    { text: 'Github', link: 'https://github.com/Zxgaer' },
                    { text: 'Gitee', link: 'https://gitee.com/zxgear' },
                    { text: 'BiliBili', link: 'https://space.bilibili.com/651930576' },
                ]
            }
        ],
sidebar: [
            {
                title: 'GameTest入门',
                path: '/GameTestDocs/GameTest框架',
                collapsable: true,
            }
          ]
    },
base: '/zxgaer.github.io/'
}

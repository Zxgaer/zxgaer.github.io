import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
export default hopeTheme({
  hostname: "https://zxgaer.top",
  author: {
    name: "Zxgaer",
    url: "https://zxgaer.top",
  },
  iconAssets: "iconfont",
  logo: "logo.png",
  docsDir: "src",
  favicon: "favicon.png",
  navbar,
  sidebar,
  footer: "Meow!",
  displayFooter: true,
  blog: {
    description: "写代码的，很可爱的喵(⁠≧⁠▽⁠≦⁠)",
    intro: "/Introduce.html",
    medias: {
      GitHub: "https://github.com/Zxgaer",
      Gitee: "https://gitee.com/zxgaer",
      BiliBili: "https://space.bilibili.com/651930576",
      Twitter: "https://x.com/zxgaer16971",
      Discord: "https://discordapp.com/users/1136217074633560114",
      Telegram: "https://t.me/zxgaer16971"
    },
  },
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },
  plugins: {
    blog: true,
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    }
  }
});

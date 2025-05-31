import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
export default hopeTheme({
    hostname: "https://zxgaer.top",
    author: {
        name: "Zxgaer",
        url: "https://zxgaer.top",
    },
    logo: "l2.png",
    docsDir: "src",
    favicon: "favicon.png",
    navbar,
    sidebar,
    footer: "Meow!",
    displayFooter: true,
    blog: {
        avatar:"logo.png",
        description: "写代码的，很可爱的喵(⁠≧⁠▽⁠≦⁠)",
        intro: "/Introduce.html",
        medias: {
            BiliBili: "https://space.bilibili.com/651930576",
            Youtube: "https://www.youtube.com/@Ergxza",
            GitHub: "https://github.com/Zxgaer",
            Twitter: "https://x.com/zxgaer16971",
            Twitch:"https://www.twitch.tv/ergxza",
            Discord: "https://discordapp.com/users/1136217074633560114",
            Email: "mailto:zxgaer@outlook.com",
            Gmail: "mailto:reagxz@gmail.com",
            Telegram: "https://t.me/zxgaer16971",
            Steam: "https://steamcommunity.com/id/zxgaer/",
            QQ:"https://qm.qq.com/q/qENulZHBhS",
            Matrix: {
                link: "https://matrix.to/#/@zxgaer:matrix.org",
                icon: "https://matrix.org/images/matrix-favicon.svg"
            }
        },
    },
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },
    markdown: {
        math: {
            type: "katex",
        },
    },
    plugins: {
        blog: true,
        icon: {
            //"iconify", "fontawesome", "fontawesome-with-brands"
            assets: "iconify",
        },
    }
});

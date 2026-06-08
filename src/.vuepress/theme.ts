import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
export default hopeTheme({
    hostname: "https://neliko.top",
    author: {
        name: "Zxgaer",
        url: "https://neliko.top",
    },
    logo: "l2.png",
    docsDir: "src",
    favicon: "favicon.png",
    navbar,
    sidebar,
    footer: "Everyone is lovely.",
    displayFooter: true,
    blog: {
        avatar:"logo.png",
        description:"Stay hungry, stay foolish.",
        intro: "/Introduce.html"
    },
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },
    markdown: {
        math: {
            type: "katex",
        },

        //上下角标
        sub: true,
        sup: true,

        spoiler: true,
    },
    plugins: {
        blog: {
            excerptLength:20
        },
        icon: {
            //"iconify", "fontawesome", "fontawesome-with-brands"
            assets: "iconify",
        },
    }
});

import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    title: "Zxgaer's Blog",
    description: "Zxgaer的个人网站",
    theme,
    head: [
        ["link", { rel: "preconnect", href: "https://static.zeoseven.com" }],
        ["link", { rel: "preconnect", href: "https://fonts.loli.net" }],
        ["link", { rel: "preconnect", href: "https://gstatic.loli.net", crossorigin: "" }],
        [
            "link",
            {
                href: "https://fonts.loli.net/css2?family=JetBrains+Mono&display=swap",
                rel: "stylesheet",
            },
        ],
        [
            "link",
            {
                href: "https://static.zeoseven.com/zsft/292/main/result.css",
                rel: "stylesheet",
            },
        ],
    ]
});

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
    [
      "link",
      {
        href: "https://static.zeoseven.com/zsft/292/main/result.css",
        rel: "stylesheet",
      },
    ],
  ],
});

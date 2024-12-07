import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "所有文章",
    icon: "blog",
    link: "/article/",
  },
  {
    text: "时间轴",
    icon: "time",
    link: "/timeline/",
  },
  {
    text: "关于",
    icon: "profile",
    link: "/Introduce/",
  },
  {
    text: "友情链接",
    icon: "link",
    link: "/FriendshipLink/",
  },
  {
    text: "文件索引",
    icon: "file",
    link: "/Files/",
  }
]);

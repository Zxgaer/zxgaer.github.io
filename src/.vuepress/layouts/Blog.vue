<script setup lang="ts">
import { Blog } from "vuepress-theme-hope/blog"
import { Icon } from "@iconify/vue"
import { computed, onMounted, ref, watch } from "vue"
import { useDarkMode } from "@vuepress/helper/client"
import Typed from "typed.js"

const isDark = useDarkMode()


const quotes = [
    "悟已往之不谏，知来者之可追",
    "Stay hungry, stay foolish.",
    "The quieter you become, the more you can hear.",
    "天接云涛连晓雾, 星河欲转千帆舞",
    "醉后不知天在水，满船清梦压星河"
]

const quoteRef = ref<HTMLElement>()

// ===== 深浅背景 =====

const currentBg = computed(() =>
    isDark.value
        ? "https://zxgaer-blog.cn-nb1.rains3.com/bg_night.webp"
        : "https://zxgaer-blog.cn-nb1.rains3.com/bg_day.webp"
)

function updateBackground() {
    const mask =
        document.querySelector(
            ".vp-blog-mask"
        ) as HTMLElement

    if (!mask) return

    // 保留 hope 的 cover 和视差
    mask.style.background =
        `url(${currentBg.value}) center / cover`
}

// ===== 打字机格言 =====

function initTyped() {
    if (!quoteRef.value) return

    quoteRef.value.innerHTML = ""

    const random =
        quotes[
        Math.floor(
            Math.random() * quotes.length
        )
        ]

    new Typed(quoteRef.value, {
        strings: [random],
        typeSpeed: 50,
        backSpeed: 0,
        showCursor: true,
        loop: false,
    })
}

onMounted(() => {
    initTyped()
    updateBackground()
})

watch(isDark, () => {
    updateBackground()
})
</script>

<template>
    <Blog>
        <template #heroInfo>
            <div class="custom-hero">

                <div class="hero-divider"></div>
                <!-- 标题 -->
                <h1 class="hero-title">猫璃琉霜 Neliko Zxgaer</h1>
                <h3 class="hero-quote"><span ref="quoteRef"></span></h3>

                <div class="hero-divider"></div>

                <!-- 链接 -->
                <div class="hero-socials">

                    <a href="https://space.bilibili.com/651930576" target="_blank" rel="noopener noreferrer"
                        aria-label="Bilibili">
                        <Icon icon="simple-icons:bilibili" class="social-icon" />
                    </a>

                    <a href="https://github.com/Zxgaer?tab=followers" target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <Icon icon="mdi:github" class="social-icon" />
                    </a>

                    <a href="https://www.youtube.com/@Ergxza" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <Icon icon="mdi:youtube" class="social-icon" />
                    </a>

                    <a href="https://x.com/Zxgaer16971" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Icon icon="ri:twitter-x-fill" class="social-icon" />
                    </a>

                    <a href="https://discordapp.com/users/1136217074633560114" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                        <Icon icon="ic:baseline-discord" class="social-icon" />
                    </a>

                    <a href="https://www.twitch.tv/ergxza" target="_blank" rel="noopener noreferrer" aria-label="Twitch">
                        <Icon icon="mdi:twitch" class="social-icon" />
                    </a>

                    <a href="https://steamcommunity.com/id/zxgaer/" target="_blank" rel="noopener noreferrer"
                        aria-label="Steam">
                        <Icon icon="mdi:steam" class="social-icon" />
                    </a>

                </div>
            </div>
        </template>
    </Blog>
</template>

<style scoped lang="scss">
.custom-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.hero-quote {
    margin-top: 6px;

    font-weight: 400;
    opacity: .9;
}


.hero-socials {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
    width: fit-content;
    max-width: 100%;

    margin-top: 20px;
}

.hero-socials a {
    width: 54px;
    height: 54px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 999px;

    color: white;
    text-decoration: none;

    background:
        rgba(255, 255, 255, .12);

    border:
        1px solid rgba(255, 255, 255, .18);

    backdrop-filter: blur(14px);

    transition: .25s ease;
}

.hero-socials a:hover {
    transform:
        translateY(-4px);

    background:
        rgba(140, 100, 255, .25);
}

.social-icon {
    font-size: 28px;
}
</style>
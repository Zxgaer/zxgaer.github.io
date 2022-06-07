window.addEventListener('scroll',textAnimation)

function textAnimation(a) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if(scrollTop > 20 && scrollTop < 200) {
        var mainText = document.getElementById("com-font")
        var nowFontSize = (400-scrollTop)
        nowFontSize +="%"

        mainText.style.fontSize = `${nowFontSize}`
    }
    if(scrollTop > 200) {
        mainText.style.fontSize = mainText.style.fontSize
    }
}
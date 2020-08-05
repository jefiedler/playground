const clickButton = document.querySelector(".btn");
const rootStyle = document.documentElement.style;

let isDark = true;

clickButton.addEventListener("click", () => {
    if (isDark){
        rootStyle.setProperty("--backgroundColor", "#fff");
        rootStyle.setProperty("--font-color", "#000");
    } else {        
        rootStyle.setProperty("--backgroundColor", "#000");
        rootStyle.setProperty("--font-color", "#fff");
    }
    isDark = !isDark
});
import { createElement } from "../utils/elements.js";

export function createToggleButton() {
    const toggleButton = createElement("button", {
        className: "btn",
        innerHTML: "Toggle Theme",
    });
    const rootStyle = document.documentElement.style;

    let isDark = true;

    toggleButton.addEventListener("click", () => {
        if (isDark){
            rootStyle.setProperty("--backgroundColor", "#fff");
            rootStyle.setProperty("--font-color", "#000");
        } else {        
            rootStyle.setProperty("--backgroundColor", "#000");
            rootStyle.setProperty("--font-color", "#fff");
        }
        isDark = !isDark
    });

    return toggleButton;
} 
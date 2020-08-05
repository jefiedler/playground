import "./global.css";
import { createTitle } from "./components/title.js";
import { createToggleButton } from "./components/toggleButton.js";
import { createElement } from "./utils/elements.js";
import imgSrc from "./assets/aktuellImgGoogle.png"

const title = createTitle();

const toggleButton = createToggleButton();

const img = createElement("img", {src: imgSrc});


document.body.append(title);
document.body.append(toggleButton);
document.body.append(img);

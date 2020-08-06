import "./global.css";
import { createTitle } from "./components/title.js";
import { createToggleButton } from "./components/toggleButton.js";
import { createElement } from "./utils/elements.js";
import { getAnime } from "./api/anime";
import { createCard } from "./components/card";


const title = createTitle();
const toggleButton = createToggleButton();

const fetchButton = createElement("button", 
{innerHTML: "Fetch",
});

fetchButton.addEventListener("click", async () => {
    const anime = await getAnime();
    const card = createCard({
        title: anime.title,
        imgSrc: anime.image_url,
        body: anime.background,
    });
    document.body.append(card);
    console.log(anime);
});


document.body.append(title);
document.body.append(toggleButton);
document.body.append(fetchButton);


import "./card.css";
import { createElement } from "../utils/elements";


export function createCard(props){
    const cardTitle = createElement("h3", {
        innerText: props.title,
    });

    const cardImage = createElement("img", {
        src: props.imgSrc,
    });

    const cardBody = createElement("p", {
        innerText: props.body,
    });

    const card = createElement("div", {
        className: "card",
    },
    [cardTitle, cardImage, cardBody]
    );
    return card;
};
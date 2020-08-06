import { createElement } from "../utils/elements.js";

export function createTitle(){
    const title = createElement("h1", { 
        innerHTML: "My Playground!"
    });
    return title;
};
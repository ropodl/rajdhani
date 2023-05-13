import { useWindowScroll } from "@vueuse/core";
const { x, y } = useWindowScroll();

export function useArticle() {
    let article = document.getElementById("article");
    console.log(article);
    console.log(y);
    // var articleHeight =article
}

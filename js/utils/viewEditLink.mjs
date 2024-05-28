import { load } from "../storage/account.mjs";
import { checkIfFrontPage } from "./checkIfFrontPage.mjs";

export function viewEditLink(post){
    const token = load("token"); 
if (token) {
    const editLink = document.createElement("a");
    editLink.setAttribute("href", `${checkIfFrontPage()}post/edit.html?id=${post.id}`);
    editLink.classList.add("edit-link"); 
    editLink.innerText = "/ Edit";
    return editLink;
} else {
    return ""; 
}
}
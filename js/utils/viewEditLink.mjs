import { load } from "../storage/account.mjs";

export function viewEditLink(post){
    const token = load("token"); 
if (token) {
    const editLink = document.createElement("a");
    editLink.setAttribute("href", `post/edit.html?id=${post.id}`);
    editLink.classList.add("edit-link"); 
    editLink.innerText = "/ Edit";
    return editLink;
} else {
    return ""; 
}
}
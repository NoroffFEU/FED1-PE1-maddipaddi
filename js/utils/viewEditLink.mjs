import { load } from "../storage/account.mjs";

export function viewEditLink(post){
    const token = load("token"); 
if (!token) {
// Error handling here
} else {
    const editLink = document.createElement("a");
    editLink.setAttribute("href", `post/edit.html?id=${post.id}`);
    editLink.innerText = "Edit";
    return editLink;
}
}
import { load } from "../storage/account.mjs";

export function loginNav() {
    const menu = document.querySelector(".menu");
    const createNewPost = document.createElement("li");
    const createNewPostLink = document.createElement("a");
    createNewPostLink.setAttribute("href", "../../post/create.html");
    createNewPostLink.innerText = "Create new post";

    createNewPost.appendChild(createNewPostLink);
    menu.appendChild(createNewPost);

    const profile = load("account");
    const userName = profile.name; 
    const loginLink = document.querySelector(".login-link");
    loginLink.innerText = `Welcome, ${userName}!`
}

import { getPosts } from "../api/posts/read.mjs";
import { createDropdown, getUniqueTags, renderPostsByTags } from "../utils/filterBy.mjs";
import { hamburgerMenuInit } from "../utils/hamburgerMenu.mjs";
import { loginView } from "../utils/loginView.mjs";


hamburgerMenuInit();

loginView(); 

async function initialize() {
    const postList = await getPosts();
    const posts = postList.data;

    const uniqueTags = getUniqueTags(posts);

    const dropdownContainer = document.querySelector(".dropdown-container");
    const dropdown = createDropdown(uniqueTags, (selectedTag) => {
        renderPostsByTags(selectedTag);
    });
    dropdownContainer.appendChild(dropdown);

    renderPostsByTags();
}

initialize();


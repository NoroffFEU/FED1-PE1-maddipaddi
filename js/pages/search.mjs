
import { getPosts } from "../api/posts/read.mjs";
import { createDropdown, getUniqueTags, renderPostsByTagsAndSort } from "../utils/filterBy.mjs";
import { hamburgerMenuInit } from "../utils/hamburgerMenu.mjs";
import { loginView } from "../utils/loginView.mjs";



hamburgerMenuInit();

loginView();

async function initialize() {
    const postList = await getPosts();
    const posts = postList.data;

    const uniqueTags = getUniqueTags(posts);

    const sortContainer = document.querySelector(".sort");
    const sortDropdown = document.createElement("select");
    sortDropdown.classList.add("dropdown");
    sortDropdown.id = "sort-order";

    const newestOption = document.createElement("option");
    newestOption.value = "newest";
    newestOption.innerText = "Newest";
    sortDropdown.appendChild(newestOption);

    const oldestOption = document.createElement("option");
    oldestOption.value = "oldest";
    oldestOption.innerText = "Oldest";
    sortDropdown.appendChild(oldestOption);

    sortContainer.appendChild(sortDropdown);

    sortDropdown.addEventListener("change", (event) => {
        renderPostsByTagsAndSort(document.querySelector(".filter select").value, event.target.value);
    });

    const dropdownContainer = document.querySelector(".filter");
    const dropdown = createDropdown(uniqueTags, (selectedTag) => {
        renderPostsByTagsAndSort(selectedTag, document.querySelector("#sort-order").value);
    });
    dropdownContainer.appendChild(dropdown);

   
   renderPostsByTagsAndSort();
}

document.addEventListener("DOMContentLoaded", initialize);


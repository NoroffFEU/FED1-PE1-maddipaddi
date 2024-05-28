
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
        const selectedTag = document.querySelector(".filter").value;
        const searchQuery = document.querySelector("#search-input").value;
        renderPostsByTagsAndSort(selectedTag, event.target.value, searchQuery);
    });

    const dropdownContainer = document.querySelector(".filter");
    const dropdown = createDropdown(uniqueTags, (selectedTag) => {
        const sortOrder = document.querySelector("#sort-order").value;
        const searchQuery = document.querySelector("#search-input").value;
        renderPostsByTagsAndSort(selectedTag, sortOrder, searchQuery);
    });
    dropdownContainer.appendChild(dropdown);


    const searchContainer = document.querySelector(".search-container");
    const searchInput = document.createElement("input");
    searchInput.classList.add("dropdown");
    searchInput.id = "search-input";
    searchInput.type = "text";
    searchInput.placeholder = "Search posts...";
    searchInput.addEventListener("input", (event) => {
        const selectedTag = document.querySelector(".filter").value;
        const sortOrder = document.querySelector("#sort-order").value;
        renderPostsByTagsAndSort(selectedTag, sortOrder, event.target.value);
    });
    searchContainer.appendChild(searchInput);
    
   
   renderPostsByTagsAndSort();
}

document.addEventListener("DOMContentLoaded", initialize);


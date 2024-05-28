import { getPosts } from "../api/posts/read.mjs";
import { renderPostGridAll } from "../templates/grid-all-posts.mjs";
import { searchPosts } from "./search.mjs";


export async function renderPostsByTagsAndSort(tag = "", order = "newest", query = "") {
    const postData = await getPosts();
    let allPosts = postData.data; 
    
    const filteredPosts = allPosts
    .filter(post => (tag ? post.tags.includes(tag) : true))
        .sort((a, b) => {
            const dateA = new Date(a.created);
            const dateB = new Date(b.created);
            return order === "newest" ? dateB - dateA : dateA - dateB;
        });

    const searchedPosts = searchPosts(filteredPosts, query);

    const postGrid = document.querySelector(".post-grid");
    postGrid.innerHTML = "";  

    renderPostGridAll(searchedPosts);
}

  export function getUniqueTags(posts) {
    const tags = new Set();
    posts.forEach(post => {
        post.tags.forEach(tag => {
            tags.add(tag);
        });
    });
    return Array.from(tags);
}


export function createDropdown(tags, onChange) {
    const dropdown = document.createElement("select");
    dropdown.classList.add("dropdown");
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.innerText = "Filter by tags";
    dropdown.appendChild(defaultOption);

    tags.forEach(tag => {
        const option = document.createElement("option");
        option.value = tag;
        option.innerText = tag;
        dropdown.appendChild(option);
    });

    dropdown.addEventListener("change", (event) => {
        onChange(event.target.value);
    });

    return dropdown;
}
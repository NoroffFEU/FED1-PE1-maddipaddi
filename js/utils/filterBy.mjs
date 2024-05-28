import { getPosts } from "../api/posts/read.mjs";
import { renderPostGridAll } from "../templates/grid-all-posts.mjs";
import { sortPostsByDate } from "./sortBy.mjs";


export async function renderPostsByTagsAndSort(tag = "", order = "newest") {
    const postList = await getPosts();
    let posts = postList.data;

    if (tag) {
        posts = posts.filter(post => post.tags.includes(tag));
    }
    
    posts = sortPostsByDate(posts, order);

    const postGrid = document.querySelector(".post-grid");
    postGrid.innerHTML = "";  

    renderPostGridAll(posts);
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
import { getPosts } from "../api/posts/read.mjs";
import { renderPostGridAll } from "../templates/grid-all-posts.mjs";


export async function renderPostsByTags(tag = "") {
    const postList = await getPosts();
    const posts = postList.data;

    const filteredPosts = tag ? posts.filter(post => post.tags.includes(tag)) : posts;

    const postGrid = document.querySelector(".post-grid");
    postGrid.innerHTML = "";  

    renderPostGridAll(filteredPosts);
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
import { getPost } from "../api/posts/read.mjs";
import { findPostID } from "../utils/findPostID.mjs";
import { postTemplate } from "./allPosts.mjs";



export function renderPostTemplate(post){
    const postContainer = document.querySelector(".post-container");
    postContainer.appendChild(postTemplate(post)); 
}


export async function renderPost() {
      const id = findPostID();
      const post = await getPost(id);
      renderPostTemplate(post);
}
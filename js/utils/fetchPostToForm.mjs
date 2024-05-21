import { getPost } from "../api/posts/read.mjs";
import { findPostID } from "./findPostID.mjs";




export async function fetchPostToForm() {
    const postID = findPostID();
    const postToEdit = await getPost(postID);

    populateForm(postToEdit);
    
  };

export function populateForm(post) {
    const postID = findPostID();
    document.getElementById("title").value = post.title;
    document.getElementById("id").value = postID;
    document.getElementById("mediaURL").value = post.media.url;
    document.getElementById("mediaALT").value = post.media.alt;
    document.getElementById("body").value = post.body;
    document.getElementById("tags").value = post.tags;
}
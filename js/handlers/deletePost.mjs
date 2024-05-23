import { removePost } from "../api/posts/delete.mjs";
import { findPostID } from "../utils//findPostID.mjs";
import { redirectToHome } from "../utils/redirectToHome.mjs";

export function deleteListener(){
    const deleteButton = document.querySelector(".delete-button");
    const postID = findPostID();
    deleteButton.addEventListener("click", () => {
        removePost(postID);
        alert("The post was deleted");
        redirectToHome();
      });
}
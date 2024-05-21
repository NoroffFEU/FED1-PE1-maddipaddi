import { updatePost } from "../api/posts/update.mjs";
import { stringToArray, setMediaObject } from "./createPost.mjs";

export function updatePostListener() {
    const form = document.querySelector("#update-post"); 

    form.addEventListener("submit", submitUpdatePostHandler);
}

function submitUpdatePostHandler(event) {
    event.preventDefault();
          const form = event.target;
          const formData = new FormData(form);
          const formValues = Object.fromEntries(formData.entries());
  
       const tagsAsArray = stringToArray(formValues.tags);
       const mediaAsObject = setMediaObject(formValues.mediaURL, formValues.mediaALT);
       
      
       const postData = {
          title: formValues.title,
          id: formValues.id,
          media: mediaAsObject,
          body: formValues.body,
          tags: tagsAsArray
      }
  
    updatePost(postData); 
  }
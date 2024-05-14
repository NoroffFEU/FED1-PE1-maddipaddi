import { createPost } from "../api/posts/create.mjs"; 

   
export function initiateCreatePostListener() {
    const form = document.querySelector("#create-post"); 

    form.addEventListener("submit", submitCreatePostHandler);
}

function submitCreatePostHandler(event) {
  event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());

     const tagsAsArray = stringToArray(formValues.tags);
     const mediaAsObject = setMediaObject(formValues.mediaURL, formValues.mediaALT);
     
    
     const postData = {
        title: formValues.title,
        media: mediaAsObject,
        body: formValues.body,
        tags: tagsAsArray
    }

  createPost(postData); 
}

function stringToArray(inputString) {
  return inputString.trim().split(",").map(item => item.trim());
}

function setMediaObject(stringUrl, stringAlt) {
 const media = {
    url: stringUrl,
    alt: stringAlt
  }
  return media; 
}
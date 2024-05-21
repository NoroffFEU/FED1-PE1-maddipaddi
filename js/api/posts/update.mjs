import * as API from "../constants.mjs";
import { fetchToken } from "../auth/fetchToken.mjs";

const API_ENDPOINT = API.API_ENDPOINT_BLOG_POSTS + API.API_ENDPOINT_NAME;
const API_BASE_URL = API.API_BASE_URL;
const method = "PUT";

export async function updatePost(postData){
    if (!postData.id) {
        throw new Error("Update requires a post ID");
    }

    const updatePostURL = `${API_BASE_URL}${API_ENDPOINT}/${postData.id}`; 
    
    const response = await fetchToken(updatePostURL, {
        method,
        body: JSON.stringify(postData)
    })

    if (response.ok) {
        alert("Post updated successfully!");
    } else {
        alert("Failed to update the post");
    }

    return await response.json();
}
import * as API from "../constants.mjs";
import { fetchToken } from "../auth/fetchToken.mjs";
import { redirectToHome } from "../../utils/redirectToHome.mjs";

const API_ENDPOINT = API.API_ENDPOINT_BLOG_POSTS + API.API_ENDPOINT_NAME;
const API_BASE_URL = API.API_BASE_URL;
const method = "post";

export async function createPost(postData){
    const createPostURL = API_BASE_URL + API_ENDPOINT; 

    const response = await fetchToken(createPostURL, {
        method,
        body: JSON.stringify(postData)
    });
    if (response.ok) {
        alert("Post created successfully!");
    } else {
        alert("Failed to create the post");
    }
   redirectToHome();
    return await response.json();
}
import * as API from "../constants.mjs";
import { fetchToken } from "../auth/fetchToken.mjs";

const API_ENDPOINT = API.API_ENDPOINT_BLOG_POSTS + API.API_ENDPOINT_NAME;
const API_BASE_URL = API.API_BASE_URL;
const method = "delete";

export async function removePost(id){

    if (!id) {
        throw new Error("Delete requires a postID");
    }

    const removePostURL = `${API_BASE_URL}${API_ENDPOINT}/${id}`; 
    
    await fetchToken(removePostURL, {
        method
    })
}
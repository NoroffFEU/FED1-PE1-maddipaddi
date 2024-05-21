import * as API from "../constants.mjs";
import { fetchToken } from "../auth/fetchToken.mjs";

const API_ENDPOINT = API.API_ENDPOINT_BLOG_POSTS + API.API_ENDPOINT_NAME;
const API_BASE_URL = API.API_BASE_URL;

export async function getPosts(){

    const getPostsURL = API_BASE_URL + API_ENDPOINT;  
    
    const response = await fetchToken(getPostsURL, {
        
    });

    const posts = await response.json();
    return posts;
}

export async function getPost(id){
    if (!id) {
        throw new Error("Get requires a postID");
    }

    const getPostURL = `${API_BASE_URL}${API_ENDPOINT}/${id}`; 
    
    const response = await fetchToken(getPostURL, {
        
    });

    const result = await response.json();
    const post = result.data;
    return post;
}


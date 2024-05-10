import { API_BASE_URL } from "../constants.mjs";
import { fetchToken } from "../auth/fetchToken.mjs";

const action = "/posts"; 

export async function getPosts(){

    const getPostsURL = `${API_BASE_URL}${action}`; 
    
    const response = await fetchToken(getPostsURL, {
        
    })

    return await response.json();
}

export async function getPost(id){
    if (id) {
        throw new Error("Get requires a postID");
    }

    const getPostURL = `${API_BASE_URL}${action}/${id}`; 
    
    const response = await fetchToken(getPostURL, {
        
    })

    return await response.json();
}
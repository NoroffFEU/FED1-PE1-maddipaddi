import { API_BASE_URL } from "../constants.mjs";
import { fetchToken } from "../auth/fetchToken.mjs";

const action = "/posts"; 
const method = "post";

export async function createPost(postData){
    const createPostURL = API_BASE_URL + action; 
    

    const response = await fetchToken(createPostURL, {
        method, 
        body: JSON.stringify(postData)
    })

    return await response.json();
}
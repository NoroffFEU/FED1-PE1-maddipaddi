import { API_BASE_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(account) {
    const registerURL = API_BASE_URL + action; 
    
    const response = await fetch (registerURL, {
        headers: {
            "Content-Type": "application/json"
        }, 
        method, 
        body: JSON.stringify(account)
    }); 

    const result = await response.json();
    console.log(result);

}
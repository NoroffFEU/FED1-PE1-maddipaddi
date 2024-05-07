import { API_BASE_URL } from "../constants.mjs";
import { displayLoginConfirmation } from "../../utils/loginConfirmation.mjs";

const action = "/auth/login";
const method = "post";

export async function login(account) {
    const loginURL = API_BASE_URL + action; 
    
    const response = await fetch (loginURL, {
        headers: {
            "Content-Type": "application/json"
        }, 
        method, 
        body: JSON.stringify(account)
    }); 

    const result = await response.json();
    displayLoginConfirmation(); 
    localStorage.setItem("token", result.accessToken);

}
import { API_BASE_URL } from "../constants.mjs";
import { displayLoginConfirmation } from "../../utils/loginConfirmation.mjs";
import * as accountStorage from "../../storage/account.mjs"; 

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
    
    const { accessToken, ...profile } = result.data; 

    accountStorage.save("token", accessToken);
    accountStorage.save("account", profile);
}
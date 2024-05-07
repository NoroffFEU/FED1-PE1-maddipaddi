import { API_BASE_URL } from "../constants.mjs";


export async function register(account, action, method) {
    const registerURL = API_BASE_URL + action; 
    console.log(registerURL);
}
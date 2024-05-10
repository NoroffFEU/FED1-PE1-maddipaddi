import { load } from "../../storage/account.mjs";


export function headers() {
    const token = load("token");
    
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}


export async function fetchToken(url, options = {}) {
   return fetch(url, {
    ...options,
    headers: headers()
 })
}
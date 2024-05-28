import { load } from "../storage/account.mjs";
import { loginNav } from "./loginNav.mjs";

export function loginView() {
const token = load("token"); 
if (!token) {
    throw new Error(error); 
} else {
    loginNav();
}
}


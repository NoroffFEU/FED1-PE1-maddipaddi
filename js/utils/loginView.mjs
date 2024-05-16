import { load } from "../storage/account.mjs";
import { displayLoginConfirmation } from "./loginConfirmation.mjs";
import { loginNav } from "./loginNav.mjs";

export function loginView() {
const token = load("token"); 
if (!token) {
// Error handling here
} else {
    loginNav();
}
}


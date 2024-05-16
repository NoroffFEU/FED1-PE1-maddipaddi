import { remove } from "../storage/account.mjs";


export function logout() {
    remove("account");
    remove("token");
}
import { logout } from "../utils/logout.mjs";

export function logoutListener(button) {
    button.addEventListener("click", () => {
        logout(); 
        location.reload(true);
    })
}
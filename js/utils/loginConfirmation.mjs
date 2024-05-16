import { logoutListener } from "../handlers/logout.mjs";
import { load } from "../storage/account.mjs";

export function displayLoginConfirmation() {
    const token = load("token");
    if (!token) {
        //error handling
    } else {
    const loginWrapper = document.querySelector(".login-wrapper");
    loginWrapper.textContent = "";
    const loginTitle = document.querySelector(".login-title");
    const confirmationMessage = "You are logged in. Welcome!"
    loginTitle.innerHTML = `${confirmationMessage}`;
    const smokeWrapper = document.querySelector(".smoke-wrapper-all-3");
    smokeWrapper.classList.add("display-smoke"); 

    const logoutButton = document.createElement("button");
    logoutButton.classList.add("cta");
    logoutButton.classList.add("logout-button");
    logoutButton.innerText = "Log out";
    logoutListener(logoutButton);

    const loginCard = document.querySelector(".login-card");
    loginCard.appendChild(logoutButton);
}
}
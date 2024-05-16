import { login } from "../api/auth/login.mjs";

export function initiateLoginFormListener() {
    const form = document.querySelector("#login-form"); 

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const account = Object.fromEntries(formData.entries());

        login(account);
});
}
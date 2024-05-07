import { register } from "../api/auth/register.mjs";

export function initiateRegisterFormListener() {
    const form = document.querySelector("#register-form"); 

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const account = Object.fromEntries(formData.entries());
        const action = form.action; 
        const method = form.method; 

        register(account, action, method); 
});
}
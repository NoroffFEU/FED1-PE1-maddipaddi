export function displayRegisterConfirmation() {
    const registerWrapper = document.querySelector(".register-wrapper");
    registerWrapper.textContent = "";
    const registerTitle = document.querySelector(".register-title");
    const confirmationMessage = "You are registered.";
    registerTitle.innerHTML = `${confirmationMessage} <a href="./login.html" class="log-in-link">Log in here.</a>`;
    const smokeWrapper = document.querySelector(".smoke-wrapper-all-3");
    smokeWrapper.classList.add("display-smoke"); 
}



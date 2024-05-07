export function displayLoginConfirmation() {
    const loginWrapper = document.querySelector(".login-wrapper");
    loginWrapper.textContent = "";
    const loginTitle = document.querySelector(".login-title");
    const confirmationMessage = "You are logged in. Welcome!"
    loginTitle.innerHTML = `${confirmationMessage}`;
    const smokeWrapper = document.querySelector(".smoke-wrapper-all-3");
    smokeWrapper.classList.add("display-smoke"); 
}
export function redirectToHome() {
    const basePath = window.location.pathname.split("/").slice(0, -2).join("/");
    const baseUrl = window.location.origin + basePath;
    window.location.href = baseUrl + "/index.html";
}
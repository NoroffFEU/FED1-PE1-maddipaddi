export function redirectToHome() {
    const pathArray = window.location.pathname.split("/");
    const basePath = pathArray.slice(0, -2).join("/");
    const baseUrl = window.location.origin + basePath + "/";
    window.location.href = baseUrl + "index.html"; 
}
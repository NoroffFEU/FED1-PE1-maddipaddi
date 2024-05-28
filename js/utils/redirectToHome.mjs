export function redirectToHome() {
    const pathArray = window.location.pathname.split('/');
    let basePath = "/";
    
    if (pathArray.length > 1 && pathArray[1] !== "") {
        basePath = "/" + pathArray[1] + "/";
    }
    window.location.href = window.location.origin + basePath;
}
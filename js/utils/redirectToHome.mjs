export function redirectToHome() {
    const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/');
    window.location.href = baseUrl;
}
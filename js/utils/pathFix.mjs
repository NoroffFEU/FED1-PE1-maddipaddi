export function fixPath() {
const checkForHome = !(window.location.pathname.includes("post")|| window.location.pathname.includes("account"));
const prePath = checkForHome? "" :"../";
return prePath;
}
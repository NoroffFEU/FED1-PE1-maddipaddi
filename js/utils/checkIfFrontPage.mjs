export function checkIfFrontPage() {
    const checkIfFrontPage = !(window.location.pathname.includes("post")|| window.location.pathname.includes("account"));
const preFix = checkIfFrontPage? "" :"../";
return preFix;
}



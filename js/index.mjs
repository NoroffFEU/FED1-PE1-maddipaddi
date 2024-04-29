const menu = document.querySelector(".menu"); 
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");


function openMenu() {
    if (menu.classList.contains("show-menu-mobile")) {
        menu.classList.remove("show-menu-mobile");
        closeIcon.style.display = "none";
        menuIcon.style.display = "flex";
    } else {
        menu.classList.add("show-menu-mobile");
        closeIcon.style.display = "flex";
        menuIcon.style.display = "none";
    }
}

menuIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", openMenu);
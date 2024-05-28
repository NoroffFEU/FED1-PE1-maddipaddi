import { hamburgerMenuInit } from "../utils/hamburgerMenu.mjs";
import { getPosts } from "../api/posts/read.mjs";
import { renderPosts } from "../templates/allPosts.mjs";
import { loginView } from "../utils/loginView.mjs";
import { renderPostGrid } from "../templates/grid-12-latest-posts.mjs";
import { renderPostCarousel } from "../templates/carousel.mjs";
import { hideLoader, showLoader } from "../utils/loader.mjs";


hamburgerMenuInit();

async function init() {
    showLoader();
    try {    
getPosts();

renderPostCarousel(); 

renderPostGrid(); 

renderPosts();
    } catch (error) {
        alert("An error occurred displaying content: " + "'" + error + "'." + " Please try again later.");
    } finally {
        hideLoader();
    }
}

init();

loginView(); 
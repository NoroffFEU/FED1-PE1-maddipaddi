import { hamburgerMenuInit } from "../utils/hamburgerMenu.mjs";
import { getPosts } from "../api/posts/read.mjs";
import { renderPosts } from "../templates/post.mjs";
import { loginView } from "../utils/loginView.mjs";
import { renderPostGrid } from "../templates/grid.mjs";

hamburgerMenuInit();

getPosts();

renderPosts();

renderPostGrid(); 

loginView(); 
import { hamburgerMenuInit } from "../utils/hamburgerMenu.mjs";
import { getPosts } from "../api/posts/read.mjs";
import { renderPosts } from "../templates/post.mjs";
import { loginView } from "../utils/loginView.mjs";

hamburgerMenuInit();

getPosts();

renderPosts();

loginView(); 
import { hamburgerMenuInit } from "../utils/hamburgerMenu.mjs";
import { getPosts } from "../api/posts/read.mjs";
import { renderPosts } from "../templates/post.mjs";

hamburgerMenuInit();

getPosts();

renderPosts();

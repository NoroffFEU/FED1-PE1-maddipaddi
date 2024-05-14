import { hamburgerMenuInit } from "../utils/hamburgerMenu.mjs";
import { getPosts } from "../api/posts/read.mjs";
hamburgerMenuInit();

getPosts();
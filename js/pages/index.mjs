import { hamburgerMenuInit } from "../utils/hamburgerMenu.mjs";
import { getPosts } from "../api/posts/read.mjs";
import { removePost } from "../api/posts/delete.mjs";

hamburgerMenuInit();

getPosts();


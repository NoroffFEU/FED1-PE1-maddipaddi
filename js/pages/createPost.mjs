import { hamburgerMenuInit } from "../utils/hamburgerMenu.mjs";
import { initiateCreatePostListener } from "../handlers/createPost.mjs";
import { createPost } from "../api/posts/create.mjs";

hamburgerMenuInit();
initiateCreatePostListener();
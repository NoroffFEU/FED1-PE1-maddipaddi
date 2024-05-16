import { hamburgerMenuInit } from "../utils/hamburgerMenu.mjs";
import { initiateCreatePostListener } from "../handlers/createPost.mjs";
import { loginView } from "../utils/loginView.mjs";

hamburgerMenuInit();
initiateCreatePostListener();
loginView();
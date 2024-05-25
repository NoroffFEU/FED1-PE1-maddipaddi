import { renderPost } from "../templates/post.mjs";
import { hamburgerMenuInit } from "../utils/hamburgerMenu.mjs";
import { loginView } from "../utils/loginView.mjs";

hamburgerMenuInit();
loginView(); 
renderPost();
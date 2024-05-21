import { hamburgerMenuInit } from "../utils/hamburgerMenu.mjs";
import { loginView } from "../utils/loginView.mjs";
import { fetchPostToForm } from "../utils/fetchPostToForm.mjs";
import { updatePostListener } from "../handlers/updatePost.mjs";

hamburgerMenuInit();

loginView(); 

fetchPostToForm();

updatePostListener();
import { hamburgerMenuInit } from "../utils/hamburgerMenu.mjs";
import { initiateLoginFormListener } from "../handlers/login.mjs";
import { loginView } from "../utils/loginView.mjs";
import { displayLoginConfirmation } from "../utils/loginConfirmation.mjs";

hamburgerMenuInit();
initiateLoginFormListener();
loginView(); 
displayLoginConfirmation();

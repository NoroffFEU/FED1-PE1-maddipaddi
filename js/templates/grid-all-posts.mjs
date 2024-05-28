import { formatDate } from "../utils/formatDate.mjs";
import { fixPath } from "../utils/pathFix.mjs";
import { viewEditLink } from "../utils/viewEditLink.mjs";

export function postGridAll(postData, index) {
    const title = document.createElement("h3");
    title.innerText = postData.title;

    const subheading = document.createElement("div");
    subheading.classList.add("post-subheading"); 

    const date = document.createElement("p");
    const formattedDate = formatDate(postData.created);
    date.innerText = `${formattedDate} /`;

    const author = document.createElement("p");
    author.innerText = `${postData.author.name}`;

    const editLink = viewEditLink(postData); 

    subheading.append(date, author, editLink);

    const heading = document.createElement("div");
    heading.classList.add("post-heading");
    heading.append(title, subheading);

    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add("media-container");
    const media = document.createElement("img");
    media.setAttribute("src", postData.media.url);
    media.setAttribute("alt", postData.media.alt);
    mediaContainer.appendChild(media);


    const post = document.createElement("div");
    post.classList.add("post-card");
    post.append(heading, mediaContainer);

    const clickableThumbnail = document.createElement("a");
    clickableThumbnail.setAttribute("href", `${fixPath()} + post/index.html?id=${postData.id}`);
    clickableThumbnail.appendChild(post);
    return clickableThumbnail;
}

export function renderPostGridAll(posts){
    const postGrid = document.querySelector(".post-grid");
   posts.forEach((post, index) => {
       postGrid.appendChild(postGridAll(post, index)); 
    });
}


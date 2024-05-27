import { getPosts } from "../api/posts/read.mjs";
import { formatDate } from "../utils/formatDate.mjs";
import { formatTags } from "../utils/formatTags.mjs";
import { viewEditLink } from "../utils/viewEditLink.mjs";

export function postTemplate(postData) {
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

    const body = document.createElement("p");
    body.innerText = postData.body;

    const tagsContainer = document.createElement("div");
    tagsContainer.classList.add("tagsContainer");
    const tags = postData.tags;
    const formattedTags = formatTags(tags);
   
    formattedTags.forEach(tagElement => {
        tagsContainer.appendChild(tagElement);
      });
    

    const post = document.createElement("div");
    post.classList.add("post");
    post.append(heading, mediaContainer, body, tagsContainer);
    return post;
}


export function renderPostsTemplate(posts){
    const blogFeed = document.querySelector(".blogfeed");
    posts.forEach(post => {
       
       blogFeed.appendChild(postTemplate(post)); 
    });
}


export async function renderPosts() {
      const postList = await getPosts();
      const posts = postList.data;
      renderPostsTemplate(posts);
}
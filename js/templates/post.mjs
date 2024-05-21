import { getPosts } from "../api/posts/read.mjs";
import { viewEditLink } from "../utils/viewEditLink.mjs";

export function postTemplate(postData) {
    const title = document.createElement("h3");
    title.innerText = postData.title;
    const date = document.createElement("p");
    date.innerText = postData.created;
    const author = document.createElement("p");
    author.innerText = postData.author.name;

    const editLink = viewEditLink(postData); 

    const media = document.createElement("img");
    media.setAttribute("src", postData.media.url);
    const body = document.createElement("p");
    body.innerText = postData.body;
    const tags = document.createElement("p");
    tags.innerText = postData.tags;

    const post = document.createElement("div");
    post.classList.add("post");
    post.append(title, date, author, editLink, media, body, tags);
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
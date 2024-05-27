import { getPosts } from "../api/posts/read.mjs";
import { formatDate } from "../utils/formatDate.mjs";
import { viewEditLink } from "../utils/viewEditLink.mjs";

export function postGridTemplate(postData, index) {
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
    if (index % 5 === 0) {
        post.classList.add('full-width');
      } else {
        post.classList.add('half-width');
      }
    post.append(heading, mediaContainer);

    const clickableThumbnail = document.createElement("a");
    clickableThumbnail.setAttribute("href", `../../post/index.html?id=${postData.id}`);
    clickableThumbnail.appendChild(post);
    return clickableThumbnail;
}


export function renderPostGridTemplate(posts){
    const latestPostsGrid = document.querySelector(".latest-posts-grid");

    const sortedPosts = posts.sort((a, b) => new Date(b.created) - new Date(a.created));
    const latestPosts = sortedPosts.slice(0, 12);

    latestPosts.forEach((post, index) => {
       
       latestPostsGrid.appendChild(postGridTemplate(post, index)); 
    });
}


export async function renderPostGrid() {
      const postList = await getPosts();
      const posts = postList.data;
      renderPostGridTemplate(posts);
}
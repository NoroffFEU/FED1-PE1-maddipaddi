export function searchPosts(posts, query) {
    if (!query) return posts;
    const lowerCaseQuery = query.toLowerCase();
    return posts.filter(post => 
        post.title.toLowerCase().includes(lowerCaseQuery) ||
        post.body.toLowerCase().includes(lowerCaseQuery)
    );
}
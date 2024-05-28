


export function sortPostsByDate(posts, order = "newest") {
    return posts.slice().sort((a, b) => {
        const dateA = new Date(a.created);
        const dateB = new Date(b.created);
        
        if (order === "newest") {
            return dateB - dateA;
        } else if (order === "oldest") {
            return dateA - dateB;
        }
    });
}


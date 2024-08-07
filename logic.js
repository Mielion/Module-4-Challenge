let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

function addBlog(blog) {
    
    blogPosts.push(blog);
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts))
}

const article = document.querySelector("article");

blogPosts.forEach(function(blogItem) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <div class="post">
            <h2>${blogItem.title}</h2>
            <p class="content">${blogItem.content}</p>
            <p class="author">${blogItem.username}</p>
        </div>
    `;
    article.appendChild(newDiv);
})
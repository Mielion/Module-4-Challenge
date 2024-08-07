// WHEN the form submits,
// THEN I am redirected to the posts page.
// WHEN I enter try to submit a form without a username, title, or content,
// THEN I am presented with a message that prompts me to complete the form

const blogForm = document.getElementById("blogForm");

blogForm.addEventListener("submit", function(event){
    
    event.preventDefault();

    let username = document.getElementById("username").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if(username == "" || title == "" || content == "") {
        alert("Please enter the values");
    } else {

        let newBlog = {
            username,
            title,
            content
        }

        addBlog(newBlog);

        window.location.href="blog.html";
    }
})


// select HTML elements
let archive = JSON.parse(localStorage.getItem('postArchive')) || [];
let titleInput = document.getElementById("postTitle");
let contentInput = document.getElementById("postContent");
let submitButton = document.getElementById("submitButton");
// select error spans
let titleSpan = document.getElementById("titleError");
let contentSpan = document.getElementById("contentError");
let submitSpan = document.getElementById("submitError");
let newPost = document.getElementById("postDiv");
// declare array to store posts in
let postArchive = [];

// function to store the blog posts in local storage
function store() {
    localStorage.setItem('postArchive',JSON.stringify(postArchive));
};

// function to display the blog post archive
function renderArchive() {
    archiveDisplay.innerHTML = "";
    for (let i = 0; i < postArchive.length; i++) {
// create HTML structure
        let wholePostDiv = document.createElement("div");
        let titleHeader = document.createElement("h2");
        let postText = document.createElement("content");
        let buttonHolder = document.createElement("span");
        let editButton = document.createElement("button");
        let deleteButton = document.createElement("button");
// append all HTML elements
        archiveDisplay.appendChild(wholePostDiv);
        wholePostDiv.appendChild(titleHeader);
        wholePostDiv.appendChild(postText);
        wholePostDiv.appendChild(buttonHolder);
        buttonHolder.appendChild(editButton);
        buttonHolder.appendChild(deleteButton);
// add text and metadata to HTML elements
        titleHeader.innerText = postArchive[i].title;
        postText.innerText = postArchive[i].content;
        editButton.innerText = "Edit";
        deleteButton.innerText = "Delete";
// give div identity
        wholePostDiv.dataset.identity = i;
// listener on delete button
        deleteButton.addEventListener("click", function(e) {
            const targetedPost = e.target.closest("div");
            const targetedIndex = targetedPost.dataset.identity;
            console.log(targetedPost);
// remove value from array
            postArchive.splice(targetedIndex,1);
// re-render archived posts from edited array
            renderArchive();
        });
// listener on edit button
        editButton.addEventListener("click",function(e) {
            const targetedPost = e.target.closest("div");
            const targetedIndex = targetedPost.dataset.identity;
// bring values to be edited to input fields
            titleInput.value = postArchive[targetedIndex].title;
            contentInput.value = postArchive[targetedIndex].content;
// remove old value from array
            postArchive.splice(targetedIndex,1);
//remove old value from HTML
            targetedPost.remove();
// changes to array and page are handled with submit button           
        });
};
};

//listener on submit button
submitButton.addEventListener("click", function(e){
// add inputs to object
    let blogPost = {
        title: titleInput.value,
        // date: 
        content: contentInput.value,
        tags: [],
    };
// check if fields are empty--add more validation here!
    if (titleInput.value === "" || contentInput.value === "") {
        alert("Please enter both values.");
        return;
    };
// add object to array
    postArchive.push(blogPost);
// render the array on screen
    renderArchive();
// clear input fields
    titleInput.value = "";
    contentInput.value = "";
// store();
});


// const utcDate = Date.parse(new Date());
// const dateOffsetMS = ((new Date().getTimezoneOffset()) * 60000);
// const datePosted = (utcDate - dateOffsetMS);
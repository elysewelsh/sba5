// select HTML elements
let postArchive = JSON.parse(localStorage.getItem('postArchive')) || [];
let titleInput = document.getElementById("postTitle");
let contentInput = document.getElementById("postContent");
let submitButton = document.getElementById("submitButton");
let pastPosts = document.getElementById("pastPosts");
// select error spans
let titleSpan = document.getElementById("titleError");
let contentSpan = document.getElementById("contentError");
let submitSpan = document.getElementById("submitError");
let newPost = document.getElementById("postForm");
// counters and formatted variables
let contentErrorCount = 0;
let titleErrorCount = 0;

// on page load
renderArchive(postArchive);
showArchive();

// function to store the blog posts in local storage
function store() {
    localStorage.setItem('postArchive',JSON.stringify(postArchive));
};

// function to display the blog post archive
function renderArchive(array) {
    archiveDisplay.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
// create HTML structure
        let wholePostDiv = document.createElement("div");
        let titleHeader = document.createElement("h3");
        let postDate = document.createElement("h4");
        let postText = document.createElement("content");
        let buttonHolder = document.createElement("span");
        let editButton = document.createElement("button");
        let deleteButton = document.createElement("button");
// append all HTML elements
        archiveDisplay.appendChild(wholePostDiv);
        wholePostDiv.appendChild(titleHeader);
        wholePostDiv.appendChild(postDate);
        wholePostDiv.appendChild(postText);
        wholePostDiv.appendChild(buttonHolder);
        buttonHolder.appendChild(editButton);
        buttonHolder.appendChild(deleteButton);
// add text and metadata to HTML elements
        titleHeader.innerText = array[i].title;
        postDate.innerText = "post last edited: "+(new Date(array[i].date)).toLocaleDateString();
        postText.innerText = array[i].content;
        editButton.innerText = "edit";
        deleteButton.innerText = "delete";
// give div identity
        wholePostDiv.dataset.identity = i;
// listener on delete button
        deleteButton.addEventListener("click", function(e) {
            const targetedPost = e.target.closest("div");
            const targetedIndex = targetedPost.dataset.identity;
// remove value from array
            array.splice(targetedIndex,1);
// re-render archived posts from edited array
            showArchive();            
            renderArchive(array);
            store();
        });
// listener on edit button
        editButton.addEventListener("click",function(e) {
            const targetedPost = e.target.closest("div");
            const targetedIndex = targetedPost.dataset.identity;
// bring values to be edited to input fields
            titleInput.value = array[targetedIndex].title;
            contentInput.value = array[targetedIndex].content;
// remove old value from array
            array.splice(targetedIndex,1);
//remove old value from HTML
            targetedPost.remove();
// changes to array and page are handled with submit button           
        });
};
};

//listener on submit button
submitButton.addEventListener("click", function(e){
// allowing for custom "submission"    
    e.preventDefault();
// reset error counters before checking for errors
    titleErrorCount = 0;
    contentErrorCount = 0;
// check if fields are empty/check for errors
    titleValidity();
    contentValidity();
// if there is any error, alert user
    if (titleErrorCount > 0 || contentErrorCount > 0) {
        alert ("please enter both values");
        return;
    };
// add inputs to object
    let blogPost = {
        title: validTitle,
        date: Date.now(),
        content: validContent,
    };
// add object to array
    postArchive.push(blogPost);
    showArchive();
// render the array on screen
    renderArchive(postArchive);
// clear input fields
    titleInput.value = "";
    contentInput.value = "";
// re-initialize counters
    titleErrorCount = 0;
    contentErrorCount = 0;
// store in localStorage
    store();
});

// check if title has content
function titleValidity () {
    titleInput.setCustomValidity("");
    if (titleInput.validity.valueMissing) {
        titleInput.setCustomValidity("please enter a title");
        titleErrorCount++;
    }
    else {
        titleErrorCount = 0;
        validTitle = titleInput.value;
        titleSpan.textContent = "";
    }
    titleSpan.textContent = titleInput.validationMessage;
};

// check if content has ...content
function contentValidity () {
    contentInput.setCustomValidity("");
    if (contentInput.validity.valueMissing) {
        contentInput.setCustomValidity("please enter your thoughts");
        contentErrorCount++;
    } 
    else {
        contentErrorCount = 0;
        validContent = contentInput.value;
        contentSpan.textContent = "";
    };
    contentSpan.textContent = contentInput.validationMessage;
};

// check to see if there are any archived posts that necessitate a header
function showArchive() {
    if (postArchive.length === 0) {
        pastPosts.style.display= "none";
    } else {
    pastPosts.style.display = "block";
    }
}
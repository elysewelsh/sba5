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

let postArchive = [];

// function to store the blog posts in local storage
function store(postArchive) {
    localStorage.setItem('postArchive',JSON.stringify(postArchive));
};

// function to display the blog post archive
function renderArchive() {
    archiveDisplay.innerHTML = "";
    for (let i = 0; i < postArchive.length; i++) {
//create HTML structure
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
// delete button listener
        deleteButton.addEventListener("click", function(e) {
            const targetedPost = e.target.closest("div");
            console.log(targetedPost);
            postArchive.splice(wholePostDiv.dataset.identity,1);
            renderArchive();
        });
        wholePostDiv.dataset.identity = i;
    }
};

submitButton.addEventListener("click", function(e){
   let blogPost = {
    title: titleInput.value,
    // date: 
    content: contentInput.value,
    tags: [],
};
  if (blogPost.title === "" || blogPost.content === "") {
    alert("Please enter both values.");
    return;
  }
  postArchive.push(blogPost); // Add item to arr array
  renderArchive();
  titleInput.value = ""; // Clear the input field
  contentInput.value = "";
});




// editButton.addEventListener("click",function(e) {

// })


// function checkBlank () {
//     let archive = JSON.parse(localStorage.getItem('array')) || [];
//     if (archive = []) {
        
//     }
// }



// if (user == null || user == "") {
//     usernameInput.value = "";
//     usernameSpan.textContent = "";
// } else {
//     usernameInput.value = user;
//     usernameSpan.textContent = ("Welcome back, " + user);
// };

// function renderCart() {
//   cart.innerHTML = ""; // Clear existing list
//   totalPrice = 0; //clear exising price
// // render cart and fill with arr array
//   for (let i = 0; i < arr.length; i++) {
//     let listItem = document.createElement("li");
//     listItem.innerText = arr[i].product + "   $" + arr[i].price+ "    ";
// // attach price as metadata of html element
//     listItem.dataset.price = Number(arr[i].price);
// // attach arr index as metadata of html element
//     listItem.dataset.identity = i;
// // add delete button at end of li
//     const deleteButton = document.createElement("button");
//         deleteButton.innerText = "x";
//         listItem.appendChild(deleteButton);
// //append li to cart ul in html
//     cart.appendChild(listItem);
//     updateTotalPrice(Number(arr[i].price));
// //event listener for delete button to remove selected element from arr array and re-render cart
//     deleteButton.addEventListener("click", function(e) {
//       const item = e.target.closest('li');
//       const price = parseFloat(item.dataset.price);
//       updateTotalPrice(-price);
//       arr.splice(item.dataset.identity,1);
//       renderCart();
//   });
// }};

// const utcDate = Date.parse(new Date());
// const dateOffsetMS = ((new Date().getTimezoneOffset()) * 60000);
// const datePosted = (utcDate - dateOffsetMS);
var add = document.getElementById("add-popup-button");
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");

add.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

var cancelbutton = document.getElementById("cancel-popup");
cancelbutton.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Select container, add-book, add-book-title-input, book-author-input, book-author-input
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button class="deletebook">Delete</button>`;
    container.append(div);
});

// Add an event listener to a parent element that contains the elements to be deleted
document.addEventListener('click', function (event) {
    // Check if the clicked element has a class of "deletebook"
    if (event.target.classList.contains('deletebook')) {
        // If so, delete its parent element
        var parentElement = event.target.parentElement;
        if (parentElement) {
            parentElement.remove();
        } else {
            console.error("Parent element not found.");
        }
    }
});
function deletebook(event){
    event.target.parentElement.remove()
}
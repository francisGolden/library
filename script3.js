// initialize myLibrary array
myLibrary = []

// select container with variable
libs = document.querySelector("#libs-container")

// declare book constructor
function Book(author, title, pages) {
    this.author = author
    this.title = title
    this.pages = pages
}

// short for console.log
log = console.log

// select submit button with variable
const submit = document.querySelector("#submit") 

// add event listener to submit button
submit.addEventListener("click", function(e) {
    // prevent default behaviour of form submission
    e.preventDefault();

    // construct new book with values gathered from inputs
    let nuovo = new Book(
        form.author.value,
        form.title.value,
        form.pages.value
        )
    
    // insert the new book to myLibrary
    myLibrary.push(nuovo)
    log(nuovo)
    log(myLibrary)
    
    // create a div so that every book has a div to be
    // into that can be flexed or 'grided'
    let contain = document.createElement("div")

    // add class name to the div
    contain.classList.add("shelf")

    // insert the div element in libs container
    libs.insertAdjacentElement("beforeend", contain)
    
    

    // for every property in book
    for (property in nuovo) {
        // insert in the container div other divs
        // with the book properties
        contain.innerHTML += `<div class="property">${nuovo[property]}</div> `
        
    }
    
    contain.innerHTML += `<button class="property">Delete book</button>`

    // for every element in myLibrary, create as many rows
    libs.style.gridTemplateRows = `repeat(${myLibrary.length}, 1fr)`;

    // for every element in the book, create as many columns
    contain.style.gridTemplateColumns = `repeat(${nuovo.length}, 1fr)`;
    
})

// declare delete all button
deleteAll = document.querySelector("#deleteAll")

// add event to delete all button
deleteAll.addEventListener("click", function() {
    myLibrary = []
})

addNumber = () => {
    for (i = 0; i<myLibrary.length; i++) {

    }
}

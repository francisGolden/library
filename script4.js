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

    for (i=0; i<myLibrary.length; i++) {
        contain.setAttribute("id", `a${i}`)
    }



    // insert the div element in libs container
    libs.insertAdjacentElement("beforeend", contain)
    
    

    // for every property in book
    for (property in nuovo) {
        // insert in the container div other divs
        // with the book properties
        contain.innerHTML += `<div class="property">${nuovo[property]}</div> `
        
    }
    
    // for (i=0; i<myLibrary.length; i++) {
    //     contain.setAttribute("id", `${i}`)
    // }

    contain.innerHTML += `<button class="property" id="deleteOne">Delete</button>`
    let deleteOne = document.querySelector("#deleteOne")
    for (i = 0; i<myLibrary.length; i++) {
        deleteOne.setAttribute("id", `b${i}`)
        deleteOne.addEventListener("click", function() {
            deleteRef = i
            d = deleteRef.toString()
            let toDelete = document.getElementById(d)
            log(deleteRef)
            log(toDelete)
            log(i)
            
        })
    }


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

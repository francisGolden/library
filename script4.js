
myLibrary = []


libs = document.querySelector("#libs-container")

//object constructor
function Book(author, title, pages) {
    this.author = author
    this.title = title
    this.pages = pages
}


log = console.log


const submit = document.querySelector("#submit") 


submit.addEventListener("click", function(e) {
    
    e.preventDefault();
    
    //create new book with form values
    let nuovo = new Book(
        form.author.value,
        form.title.value,
        form.pages.value
        )
    
    //add book to array
    myLibrary.push(nuovo)
    log(nuovo)
    log(myLibrary)
    
    //create new div that will contain book infos
    let contain = document.createElement("div")
  
    contain.classList.add("shelf")

    for (i=0; i<myLibrary.length; i++) {
        contain.setAttribute("id", `a${i}`)
    }
    
    //insert contain in libs
    libs.insertAdjacentElement("beforeend", contain)
    
    //for every property in new book, inject the property to book container HTML
    for (property in nuovo) {
        contain.innerHTML += `<div class="property">${nuovo[property]}</div> `
    }
    
    //select "delete all" button
    deleteAll = document.querySelector("#deleteAll")

    deleteAll.addEventListener("click", function(e) {
        myLibrary = []
        e.preventDefault()
        shelves = document.querySelectorAll(".shelf")
        log(shelves.length)
        
        //delete every book in all shelves
        shelves.forEach(book => {
          book.remove();
        })

    })
  
   
    contain.innerHTML += `<button class="property" id="deleteOne">Delete</button>`
    let deleteOne = document.querySelectorAll("#deleteOne")
    
    //add an event listener to every deleteOne button and make it delete its parentNode 
    deleteOne.forEach(book => {
      book.addEventListener("click", function() {
        book.parentNode.remove()
      })
    })    
        
     
    
  
    libs.style.gridTemplateRows = `repeat(${myLibrary.length}, 1fr)`;

    // for every element in the book, create as many columns
    contain.style.gridTemplateColumns = `repeat(${nuovo.length}, 1fr)`;
    
})

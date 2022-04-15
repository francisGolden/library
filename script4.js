
myLibrary = []


libs = document.querySelector("#libs-container")

class Book {
  constructor(author, title, pages){
    this.author = author
    this.title = title
    this.pages = pages
  }
}

// function Book(author, title, pages) {
//     this.author = author
//     this.title = title
//     this.pages = pages
// }

log = console.log


const submit = document.querySelector("#submit") 


submit.addEventListener("click", function(e) {
    
    e.preventDefault();

    let nuovo = new Book(
        form.author.value,
        form.title.value,
        form.pages.value
        )
    
   
    myLibrary.push(nuovo)
    log(nuovo)
    log(myLibrary)
    
    
    let contain = document.createElement("div")
    
    
   
    contain.classList.add("shelf")

    for (i=0; i<myLibrary.length; i++) {
        contain.setAttribute("id", `a${i}`)
    }



   
    libs.insertAdjacentElement("beforeend", contain)
    
    

    
    for (property in nuovo) {
        contain.innerHTML += `<div class="property">${nuovo[property]}</div> `
    }
    
    deleteAll = document.querySelector("#deleteAll")

    deleteAll.addEventListener("click", function(e) {
        myLibrary = []
        e.preventDefault()
        shelves = document.querySelectorAll(".shelf")
        log(shelves.length)

        shelves.forEach(book => {
          book.remove();
        })

    })
  
   
    contain.innerHTML += `<button class="property" id="deleteOne">Delete</button>`
    let deleteOne = document.querySelectorAll("#deleteOne")
    
      
    deleteOne.forEach(book => {
      book.addEventListener("click", function() {
        book.parentNode.remove()
      })
    })    
        
     
    
  
    libs.style.gridTemplateRows = `repeat(${myLibrary.length}, 1fr)`;

    // for every element in the book, create as many columns
    contain.style.gridTemplateColumns = `repeat(${nuovo.length}, 1fr)`;
    
})

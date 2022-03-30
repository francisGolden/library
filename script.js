let log = console.log

let myLibrary = [];

let libraryContainer = document.querySelector("#lib-container")

function Book(author, title, read) {
    this.author = author
    this.title = title
    this.read = read
}

newBook1 = new Book("freud", "sogni", "true")
newBook2 = new Book("barbero", "storia", "false")


function addBookToLibrary() {
    myLibrary.push(newBook1)
    myLibrary.push(newBook2)
}

addBookToLibrary()

// when I click the submit button
// add items to the session storage
// for every input text
let submitFunction = (e) => {
    sessionStorage.setItem("autore", form.author.value); 
    sessionStorage.setItem("titolo", form.title.value);
    sessionStorage.setItem("letto", form.read.value);

    

    e.preventDefault();
    log(autore)
} 

// construct a new book with the values entered in 
// the input elements
const book3 = new Book(
    sessionStorage.getItem("autore"),
    sessionStorage.getItem("titolo"),
    sessionStorage.getItem("letto")
)


// prepare library container to receive the book properties
libs = document.getElementById("libs-container")

// for every property in the object
// insert the property in the text container
for (property in book3) {
    libs.innerHTML += `${book3[property]} `
}


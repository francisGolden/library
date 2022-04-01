myLibrary = [
    1,
]

libs = document.querySelector("#libs-container")

function Book(author, title, read) {
    this.author = author
    this.title = title
    this.read = read
}

log = console.log
const submit = document.querySelector("#submit") 

submit.addEventListener("click", function(e) {
    e.preventDefault();

    let nuovo = new Book(
        form.author.value,
        form.title.value,
        form.read.value
        )
    
    myLibrary.push(nuovo)
    log(nuovo)
    log(myLibrary)
    
    let contain = document.createElement("div")
    contain.classList.add("shelf")
    libs.insertAdjacentElement("beforeend", contain)

    for (property in nuovo) {
        contain.innerHTML += `<div>${nuovo[property]}</div> `
        
    }
    contain.innerHTML += `<br>`
    libs.style.gridTemplateRows = `repeat(${myLibrary.length}, 1fr)`;
    contain.style.gridTemplateColumns = `repeat(${nuovo.length}, 1fr)`;
    
})

deleteAll = document.querySelector("#deleteAll")
deleteAll.addEventListener("click", function() {
    myLibrary = []
})
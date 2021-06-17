let myLibrary = [];

let $title = document.querySelector("#title")
let $author= document.querySelector("#author")
let $pages = document.querySelector("#pages")
let $readed = document.querySelector("#readed")
let $library = document.querySelector("#library")


let $btnAddBook = document.querySelector("#btn-add-book").addEventListener("click", function(e){
    addBookToLibrary($title.value, $author.value, $pages.value, $readed.checked)
    displayBooks(myLibrary)
    closeModal()
    clearAll()
})

let $btnCancel = document.querySelector(".btn-cancel").addEventListener("click",function (e) {
    closeModal()
    clearAll()
})

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
}

function addBookToLibrary(title, author, pages, read) {
    let libro= new Book(title, author, pages, read)
    return  myLibrary.push(libro)
}

function displayBooks(array) {
    let container = document.createElement("div")
    let title =document.createElement("div")
    let author =document.createElement("div")
    let pages =document.createElement("div")
    let readed =document.createElement("div")
    container.classList.add("book")
    for (let i = 0; i < array.length; i++) {
        title.textContent = `Title: ${myLibrary[i].title}` 
        author.textContent =  `Author: ${myLibrary[i].author}`
        pages.textContent =  `Pages: ${myLibrary[i].pages}`
        readed.textContent =  `Readed: ${myLibrary[i].read}`
        
        $library.appendChild(container)
        container.appendChild(title)
        container.appendChild(author)
        container.appendChild(pages)
        container.appendChild(readed)
    }
}

const modal = document.querySelector(".modal-container")
const openModal = document.querySelector(".modal-call").addEventListener("click",function(e) {
    showmodal()
})

function showmodal() {
    modal.classList.add("modal-open")
}

function closeModal() {
    modal.classList.remove("modal-open")
}

function clearAll() {
    $title.value = ""
    $author.value = ""
    $pages.value = ""
    $readed.checked = ""
}

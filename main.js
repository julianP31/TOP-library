let myLibrary = [];

let $title = document.querySelector("#title")
let $author = document.querySelector("#author")
let $pages = document.querySelector("#pages")
let $readed = document.querySelector("#readed")
let $library = document.querySelector("#library")
let $books = document.querySelectorAll(".book")



let $btnAddBook = document.querySelector("#btn-add-book").addEventListener("click", function (e) {
  addBookToLibrary($title.value, $author.value, $pages.value, $readed.checked)
  displayBooks(myLibrary)
  closeModal()
  clearAll()
  $books = document.querySelectorAll(".book")
})

let $btnCancel = document.querySelector(".btn-cancel").addEventListener("click", function (e) {
  closeModal()
  clearAll()
})
let bookid = 0
class Book {
  constructor(
    title = "Unknown",
    author = "Unknown",
    pages = "0",
    read = "false",
    id = "0"
  ) {
    this.id = ++bookid;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  let libro = new Book(title, author, pages, read)
  return myLibrary.push(libro)
}

function displayBooks(array) {
  let container = document.createElement("div")
  let title = document.createElement("div")
  let author = document.createElement("div")
  let pages = document.createElement("div")
  let readed = document.createElement("div")
  let deleteBTN = document.createElement("button")
  container.classList.add("book")
  deleteBTN.classList.add("delete-btn")
  deleteBTN.textContent = "X"
  for (let i = 0; i < array.length; i++) {
    title.textContent = `Title: ${myLibrary[i].title}`
    author.textContent = `Author: ${myLibrary[i].author}`
    pages.textContent = `Pages: ${myLibrary[i].pages}`
    readed.textContent = `Readed: ${myLibrary[i].read}`
    container.dataset.id = myLibrary[i].id;
    deleteBTN.dataset.id = myLibrary[i].id;

    deleteBTN.addEventListener("click", function () {
      removeChild(deleteBTN.dataset.id);
      removeAbook(deleteBTN.dataset.id);
    })
    $library.appendChild(container)
    container.appendChild(title)
    container.appendChild(author)
    container.appendChild(pages)
    container.appendChild(readed)
    container.appendChild(deleteBTN)
  }
}

function getBTNId() {
  $deleteBTN.forEach((button) => {
    button.addEventListener('click', () => {
      return console.log(button.dataset.id);
    });
  });
}

function removeAbook(dataID) {
  let number = parseInt(dataID)
  let wantedBook = (b) => b.id === number;
  let index = myLibrary.findIndex(wantedBook)
  if(index === -1){
    myLibrary
  } else{
  myLibrary.splice(index, 1)
}
}

function removeChild(dataID) {
  const child = document.querySelector(`[data-id='${dataID}']`);

  if (child) child.remove();
};


const modal = document.querySelector(".modal-container")
const openModal = document.querySelector(".modal-call").addEventListener("click", function (e) {
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

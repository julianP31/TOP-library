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
  container.classList.add("book")

  let title = document.createElement("div")
  let author = document.createElement("div")
  let pages = document.createElement("div")

  let readed = document.createElement("input")
  readed.setAttribute("type", "checkbox")
  readed.classList.add("switch")
  readed.addEventListener("click", function () {
    updateReadedStatus(searchABook(readed.dataset.id))
  })

  let label = document.createElement("label")
  label.textContent = "Readed"
  label.classList.add("readed-label")

  let deleteBTN = document.createElement("button")
  deleteBTN.classList.add("delete-btn", "material-icons")
  deleteBTN.textContent = "close"
  deleteBTN.addEventListener("click", function () {
    removeChild(deleteBTN.dataset.id);
    removeAbook(searchABook(deleteBTN.dataset.id));
  })


  for (let i = 0; i < array.length; i++) {
    title.textContent = `Title: ${myLibrary[i].title}`
    author.textContent = `Author: ${myLibrary[i].author}`
    pages.textContent = `Pages: ${myLibrary[i].pages}`
    readed.checked = myLibrary[i].read

    container.dataset.id = myLibrary[i].id;
    deleteBTN.dataset.id = myLibrary[i].id;
    readed.dataset.id = myLibrary[i].id

    $library.appendChild(container)
    container.appendChild(deleteBTN)
    container.appendChild(title)
    container.appendChild(author)
    container.appendChild(pages)
    container.appendChild(label)
    label.appendChild(readed)
    
  }
}

function searchABook(dataID) {
  let number = parseInt(dataID)
  let wantedBook = (b) => b.id === number;
  let index = myLibrary.findIndex(wantedBook)
  return index
}

function updateReadedStatus(index) {
  let updateBook = myLibrary[index]
  if (index === -1) {
    myLibrary
  } else {
    if (updateBook.read === true) {
      updateBook.read = false
    } else {
      updateBook.read = true
    }
  }
}

function removeAbook(index) {
  if (index === -1) {
    myLibrary
  } else {
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


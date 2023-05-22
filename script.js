let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    const cards_container = document.querySelector(".cards-container");
    cards_container.replaceChildren();

    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement("div");
        div.className = `card ${[i]}`;
        cards_container.appendChild(div);

        const btn = document.createElement("button");
        btn.innerHTML = "x";

        const span = document.createElement("span");
        span.appendChild(btn);

        const h1 = document.createElement("h1");
        h1.innerHTML = `${myLibrary[i].title}`;

        const h2 = document.createElement("h2");
        h2.innerHTML = `Author: ${myLibrary[i].author}`;

        const p = document.createElement("p");
        p.innerHTML = `${myLibrary[i].pages} pages`;

        const p2 = document.createElement("p");
        p2.innerHTML = `Read: ${myLibrary[i].read}`;

        div.append(span, h1, h2, p, p2);
    }
}

function showForm() {
    form.style.display = "block";
}

function closeForm() {
    form.style.display = "none";
}

function removeBook(el) {
    card = el.parentNode.parentNode;
    card.remove();

    index = card.className.split(" ")[1];
    myLibrary.splice(index, 1);

    displayBooks();
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "323", "no");
addBookToLibrary("The Hunger Games", "Suzanne Collins", "374", "no");
addBookToLibrary("Animal Farm", "George Orwell", "128", "no");
displayBooks();

const add_btn = document.querySelector(".add-book-button");
const form = document.querySelector("#myForm");
const card_remove_btn = document.querySelector(".card button");

add_btn.addEventListener("click", () => {
    showForm();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;

    addBookToLibrary(title, author, pages, read);
    displayBooks();
    closeForm();
});

card_remove_btn.addEventListener("click", () => {
    removeBook(card_remove_btn);
});

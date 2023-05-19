let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = prompt("What is the title of the book?");
    let author = prompt("Who is the author of the book?");
    let pages = prompt("How many pages does the book have?");
    let read = prompt("Have you read the book? y/n");

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    const cards_container = document.querySelector(".cards-container");
    cards_container.replaceChildren();

    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement("div");
        div.className = "card";
        cards_container.appendChild(div);

        const h1 = document.createElement("h1");
        h1.innerHTML = `${myLibrary[i].title}`;

        const h2 = document.createElement("h2");
        h2.innerHTML = `${myLibrary[i].author}`;

        const p = document.createElement("p");
        p.innerHTML = `${myLibrary[i].pages}`;

        const p2 = document.createElement("p");
        p2.innerHTML = `${myLibrary[i].read}`;

        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(p2);
    }
}

addBookToLibrary();
displayBooks();

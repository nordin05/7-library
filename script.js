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

function showForm() {
    form.style.display = "block";
}

function closeForm() {
    form.style.display = "none";
}

// addBookToLibrary();
displayBooks();

const add_btn = document.querySelector(".add-book-button");
const form = document.querySelector("#myForm");

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

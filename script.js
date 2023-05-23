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
        h2.innerHTML = `${myLibrary[i].author}`;

        const p = document.createElement("p");
        p.innerHTML = `${myLibrary[i].pages} pages`;

        const read_status = document.createElement("div");
        read_status.className = "read-status";

        if (myLibrary[i].read == true) {
            read_status.innerHTML = "Read";
        } else if (myLibrary[i].read == false) {
            read_status.innerHTML = "Not read";
        }

        div.append(span, h1, h2, p, read_status);
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
    console.log(myLibrary);
    displayBooks();
}

function toggleReadStatus() {}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "323", false);
addBookToLibrary("The Hunger Games", "Suzanne Collins", "374", false);
addBookToLibrary("Animal Farm", "George Orwell", "128", false);
displayBooks();

const add_btn = document.querySelector(".add-book-button");
const form = document.querySelector("#myForm");
const card_remove_btn = [...document.querySelectorAll(".card button")];
const read_status_btn = document.querySelector(".read-status");

add_btn.addEventListener("click", () => {
    showForm();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();
    closeForm();
});

document.addEventListener("click", function (e) {
    const card_remove_btn = e.target.closest(".card button");
    const read_status_btn = e.target.closest(".read-status");
    if (card_remove_btn) {
        removeBook(card_remove_btn);
    } else if (read_status_btn) {
        console.log("Change read status");
    }
});

// card_remove_btn.forEach(function (item) {
//     item.addEventListener("click", function () {
//         removeBook(item);
//     });
// });

// card_remove_btn.addEventListener("click", () => {
//     removeBook(card_remove_btn);
// });

// read_status_btn.addEventListener("click", () => {
//     if (read_status_btn.innerHTML == "Read") {
//         read_status_btn.innerHTML = "Not Read";
//     } else if (read_status_btn.innerHTML == "Not read") {
//         read_status_btn.innerHTML = "Read";
//     }
// });

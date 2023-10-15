// Book Class: Represents a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'Anshu Gupta',
                isbn: '12345'
            },
            {
                title: 'Book Two',
                author: 'Ashutosh Singh',
                isbn: '23456'
            },
            {
                title: 'Book Three',
                author: 'Rahul Kumar Ojha',
                isbn: '34567'
            }
        ];
        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        var bookList = document.getElementById('book-list');
        var row = document.createElement('tr');
        row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#" class="btn btn-sm btn-danger delete">X</a></td>
            `;
        bookList.appendChild(row);
    }

    static clearFields() {
        const title = document.getElementById('title');
        const author = document.getElementById('author');
        const isbn = document.getElementById('isbn');

        title.value = '';
        author.value = '';
        isbn.value = '';
    }

    static deleteBook(deleteElement) {
        if (deleteElement.classList.contains('delete')) {
            const tdElement = deleteElement.parentElement;
            const trElement = tdElement.parentElement;
            trElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        const messageText = document.createTextNode(message);
        div.appendChild(messageText);

        const container = document.querySelector('.container');
        const form = document.getElementById('book-form');
        container.insertBefore(div, form);

        setTimeout(() => document.querySelector('.alert').remove(),
            3000);
    }
}

// Store Class: Handles Storage
class Store {
    static getBooks() {
        let books;
        const localStorageBooks = localStorage.getItem('books');
        if (localStorageBooks === null)
            books = [];
        else
            books = JSON.parse(localStorageBooks);

        return books;
    }
}

// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book
const form = document.getElementById('book-form');
form.addEventListener('submit', addBook);
function addBook(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === '')
        UI.showAlert('Please fill in all fields', 'danger');
    else {
        const book = new Book(title, author, isbn);
        UI.addBookToList(book);
        UI.showAlert('Book added', 'success');
        UI.clearFields();
    }
}

// Event: Remove a book
const bookList = document.getElementById('book-list');
bookList.addEventListener('click', deleteBook);
function deleteBook(e) {
    UI.deleteBook(e.target);
    UI.showAlert('Book removed', 'success');
}
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
}

// Store Class: Handles Storage
// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book
var form = document.getElementById('book-form');
form.addEventListener('submit', addBook);
function addBook(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    UI.addBookToList(book);
    UI.clearFields();
}

// Event: Remove a book
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
}

// Store Class: Handles Storage
// Event: Display books
// Event: Add a book
// Event: Remove a book
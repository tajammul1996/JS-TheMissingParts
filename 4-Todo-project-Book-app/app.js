// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI () {}

// Event Listeners

document.getElementById('book-form').addEventListener('submit', function(e){
    console.log('text');

    // Get form values
    const title = document.getElementById('title').value,
          author =  document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    // Instantiate book
    const book = new Book(title, author, isbn)

    // Instantiate UI
    

    console.log(book)

    e.preventDefault();
})
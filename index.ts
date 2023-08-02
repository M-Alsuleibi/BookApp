import express from 'express';
const app = express();
const PORT = 3000;

import data from './data/sampleData.js';
import Library from './types/library.js';
import bookRouter from './routers/book.js';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Request a Book!');
});

app.use('/books', bookRouter)

// Retrieve all books: Implement a GET route to fetch all books from the JSON file and return them as a JSON response.
bookRouter.get('/', (req, res) => {
  const titles = data.map(book => book.title);
  let myBook = JSON.stringify(data);

  res.send(myBook);
});



//Retrieve a specific book: Implement a GET route that accepts a book ID as a path parameter and returns the corresponding book details from the JSON file.

bookRouter.get('/:id', (req, res) => {

  const bookId = parseInt(req.params.id);
  const book = data.find((book) => book.id === bookId)

  res.send(book);
});

//Add a new book: Implement a POST route that accepts book details in the request body and adds the book to the JSON file. The route should validate the input data and handle any error.
bookRouter.post('/post', (req: Library.Request, res: Library.Response) => {

  const { title, author, publicationYear } = req.body;

  if (!req.body.title || !req.body.author || !req.body.publicationYear) {
    res.status(400).send("Invalid input!")
    return;
  }

  const newBook: Library.Book = {
    id: data.length + 1,
    title: req.body.title,
    author: req.body.author,
    publicationYear: req.body.publicationYear,
  }

  data.unshift(newBook);
  res.status(201).send("Book Created!");
});


//Update a book: Implement a PUT route that accepts a book ID as a path parameter and updated book details in the request body. The route should update the corresponding book in the JSON file.
bookRouter.put('/update/:id', (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;

  if (!updatedBook.title || !updatedBook.author || !updatedBook.publicationYear) {
    res.status(400).send('Invalid input! Insert title, author, and publicationYear.');
  }

  const bookToUpdate = data.findIndex((book) => book.id === parseInt(bookId));

  if (bookToUpdate === -1) {
    res.status(404).send("Error!");
  }

  data[bookToUpdate].title = updatedBook.title;
  data[bookToUpdate].author = updatedBook.author;
  data[bookToUpdate].publicationYear = updatedBook.publicationYear;

  res.json(data[bookToUpdate]);
});

// Delete a book: Implement a DELETE route that accepts a book ID as a path parameter and deletes the corresponding book from the JSON file.
bookRouter.delete('/delete/:id', (req, res) => {
  const bookId = parseInt(req.params.id);

  res.send(`The book with ${bookId} ID has been deleted ID:`);


});


//Query books by name: Implement a GET route that accepts a book name as a query parameter and returns a list of books matching the provided name from the JSON file.
bookRouter.get('/title', (req, res) => {
  const bookTitle = req.query.title as string;

  if (!bookTitle) {
    return res.status(400).send("Book title not found.");
  }

  //Find the book by title by converting all compared string to lower case .
  const book = data.find((book) => book.title.toLowerCase() === bookTitle.toLowerCase());

  if (!book) {
    return res.status(404).send("Book not found!");
  }

  res.send(book);
});

//Query books by publishing year: Implement a GET route that accepts a publishing year as a query parameter and returns a list of books published in the provided year from the JSON file.
bookRouter.get('/publicationYear/:publicationYear', (req, res) => {
  const bookPublicationYear = parseInt(req.params.publicationYear);
  const booksWithSamePublicationYear = data.filter((book) => book.publicationYear === bookPublicationYear);

  res.send(booksWithSamePublicationYear);
});



app.use((req, res) => {
  res.status(404).send("EROOR! 404");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from 'express';
import data from './data/sample_data.js'; 
import Library from './types/library.js';
import bookRouter from './routers/route_a_book.js';

const app = express();
const PORT = 3000;


//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())

app.use('/route_a_book', bookRouter)

// 1st To-Do
bookRouter.get('/', (req, res) => {
  const titles = data.map(book => book.title); 
  let myBook = JSON.stringify(data); 

  res.send(myBook);
});



//2nd todo 
bookRouter.get('/:id', (req, res) => {

  const bookId = parseInt(req.params.id);
  const book = data.find((book) => book.id === bookId)

  res.send(book);
});

//3rd todo 
bookRouter.post('/post', (req: Library.Request, res: Library.Response) => { 

  const { title, author, publicationYear } = req.body;

  if (!req.body.title || !req.body.author || !req.body.publicationYear) {
    res.status(400).send("invalid input!")
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


//4th todo 
bookRouter.put('/update/:id', (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;

  if (!updatedBook.title || !updatedBook.author || !updatedBook.publicationYear) {
   res.status(400).send('Invalid input! Please provide title, author, and publicationYear.');
  }

  const bookToUpdate= data.findIndex((book) => book.id ===  parseInt(bookId));

  if (bookToUpdate === -1) {
   res.status(404).send("not found!");
  }

  data[bookToUpdate].title = updatedBook.title;
  data[bookToUpdate].author = updatedBook.author;
  data[bookToUpdate].publicationYear = updatedBook.publicationYear;

  res.json(data[bookToUpdate]);
});

//5th todo 
bookRouter.delete('/delete/:id', (req, res) => {
  const bookId = parseInt(req.params.id);

  console.log('Deleting book with ID:', bookId);

  const bookIndex = data.findIndex((book) => book.id === bookId);

  console.log('Book index:', bookIndex);

  if (bookIndex === -1) {
    console.log(' not found!');
  }

  data.splice(bookIndex, 1);

  console.log('Book deleted successfully!');

  res.status(200).send('Book deleted successfully!');
});


//6th todo 
bookRouter.get('/title', (req, res) => {
  const bookTitle = req.query.title as string;

  if (!bookTitle) {
    return res.status(400).send("Provide book title in query parameters.");
  }

  // Find the book by its title (case-insensitive comparison)
  const book = data.find((book) => book.title.toLowerCase() === bookTitle.toLowerCase());

  if (!book) {
    return res.status(404).send("not found!");
  }

  res.send(book);
});

//7th   
  bookRouter.get('/pup/:publicationYear', (req, res) => {
    const bookPup = parseInt(req.params.publicationYear);
    const booksWithSamePup = data.filter((book) => book.publicationYear === bookPup);
  
    res.send(booksWithSamePup);
  });
  

app.use((req, res) => {
  res.status(404).send("PAGE NOT FOUND!");
});

app.listen(PORT, () => {
  console.log(`App is running and Listening on *${PORT}`);
});


// // Our fake database:
// let comments = [
//   {
//     username: 'Todd',
//     comment: 'lol that is so funny!'
//   },
//   {
//     username: 'Skyler',
//     comment: 'I like to go birdwatching with my dog'
//   },
//   {
//     username: 'Sk8erBoi',
//     comment: 'Plz delete your account, Todd'
//   },
//   {
//     username: 'onlysayswoof',
//     comment: 'woof woof woof'
//   }
// ]
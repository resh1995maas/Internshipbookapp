const router = require("express").Router();
const Book = require('../Model/book');

// Create a new book
router.post('/books', async (req, res) => {
  const { title, author, publicationYear, genre, isbn } = req.body;

  const newBook = new Book({
    title,
    author,
    publicationYear,
    genre,
    isbn,
  });

  try {
    await newBook.save();
    res.status(201).json({ message: 'Book added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding book' });
  }
});

// List all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books' });
  }
});

// Update a book
router.put('/books/:id', async (req, res) => {
  const { title, author, publicationYear, genre, isbn } = req.body;

  try {
    await Book.findByIdAndUpdate(req.params.id, {
      title,
      author,
      publicationYear,
      genre,
      isbn,
    });
    res.status(200).json({ message: 'Book updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating book' });
  }
});

// Delete a book
router.delete('/books/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book' });
  }
});
module.exports = router;

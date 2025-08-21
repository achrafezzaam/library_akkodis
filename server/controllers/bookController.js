const Book = require('../models/bookModel');
const { asyncHandler } = require('../middleware');

const getAllBooks = asyncHandler(async (req, res) => {
    const books = await Book.find({});
    res.status(200).json(books);
});

const createBook = asyncHandler(async (req, res) => {
    const {title, author, genre, publishedYear} = req.body;
    const newBook = new Book({
        title,
        author,
        genre,
        publishedYear,
    });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
});

const getBookById = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
});

const updateBook = asyncHandler(async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true, runValidators: true}
    );

    if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(updatedBook);
});

const deleteBook = asyncHandler(async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(202).json(book);
});

module.exports = {
    getAllBooks,
    createBook,
    getBookById,
    updateBook,
    deleteBook,
};
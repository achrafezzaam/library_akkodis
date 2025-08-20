const Book = require('../models/bookModel');

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createBook = async (req, res) => {
    try {
        const {title, author, genre, publishedYear} = req.body;
        const newBook = new Book({
            title,
            author,
            genre,
            publishedYear,
        })
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBooks,
    createBook,
    getBookById,
};
import { useState, useEffect } from 'react';
import { Library, BookOpen, Loader2, AlertCircle } from 'lucide-react';
import BookCard from './components/BookCard';
import BookForm from './components/BookForm';
import { bookService } from './services/api';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingBook, setEditingBook] = useState(null);
  const [formLoading, setFormLoading] = useState(false);

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError('');
      const booksData = await bookService.getAllBooks();
      setBooks(booksData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBook = async (bookData) => {
    try {
      setFormLoading(true);
      setError('');
      const newBook = await bookService.createBook(bookData);
      setBooks(prev => [...prev, newBook]);
      setSuccess('Book added successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setFormLoading(false);
    }
  };

  const handleEditBook = async (bookData) => {
    try {
      setFormLoading(true);
      setError('');
      const updatedBook = await bookService.updateBook(editingBook._id, bookData);
      setBooks(prev => prev.map(book => 
        book._id === editingBook._id ? updatedBook : book
      ));
      setEditingBook(null);
      setSuccess('Book updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteBook = async (bookId) => {
    if (!window.confirm('Are you sure you want to delete this book?')) {
      return;
    }

    try {
      setError('');
      await bookService.deleteBook(bookId);
      setBooks(prev => prev.filter(book => book._id !== bookId));
      setSuccess('Book deleted successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleFormSubmit = (bookData) => {
    if (editingBook) {
      handleEditBook(bookData);
    } else {
      handleAddBook(bookData);
    }
  };

  const handleCancelEdit = () => {
    setEditingBook(null);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <Library size={32} className="logo-icon" />
          <div>
            <h1>Library Management System</h1>
            <p>Manage your book collection with ease</p>
          </div>
        </div>
      </header>

      <div className="container">
        {error && (
          <div className="error">
            <AlertCircle size={16} />
            {error}
          </div>
        )}

        {success && (
          <div className="success">
            {success}
          </div>
        )}

        <div className="main-content">
          <div className="books-section">
            <h2 className="section-title">
              <BookOpen size={24} />
              Book Collection ({books.length})
            </h2>

            {loading ? (
              <div className="loading">
                <Loader2 size={24} className="animate-spin" />
                Loading books...
              </div>
            ) : books.length === 0 ? (
              <div className="empty-state">
                <BookOpen size={48} className="empty-state-icon" />
                <h3>No books in your library yet</h3>
                <p>Start building your collection by adding your first book!</p>
              </div>
            ) : (
              <div className="books-grid">
                {books.map(book => (
                  <BookCard
                    key={book._id}
                    book={book}
                    onEdit={setEditingBook}
                    onDelete={handleDeleteBook}
                  />
                ))}
              </div>
            )}
          </div>

          <BookForm
            onSubmit={handleFormSubmit}
            editingBook={editingBook}
            onCancel={handleCancelEdit}
            loading={formLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
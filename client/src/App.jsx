import { useState, useEffect } from 'react';
import { Library, BookOpen, Loader2, AlertCircle } from 'lucide-react';
import BookCard from './components/BookCard';
import BookForm from './components/BookForm';
import Pagination from './components/Pagination';
import { bookService } from './services/api';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingBook, setEditingBook] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  // Pagination state
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalDocs: 0,
    limit: 10,
    hasNextPage: false,
    hasPrevPage: false
  });

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks(1, 10, true).then(() => {
      setInitialLoadComplete(true);
    });
  }, []);

  // Fetch books when pagination changes (but not on initial load)
  useEffect(() => {
    if (initialLoadComplete) {
      fetchBooks(pagination.currentPage, pagination.limit, false);
    }
  }, [pagination.currentPage, pagination.limit, initialLoadComplete]);

  const fetchBooks = async (page = 1, limit = 10, isInitialLoad = false) => {
    try {
      if (isInitialLoad) {
        setLoading(true);
      } else {
        setPaginationLoading(true);
      }
      setError('');
      const booksData = await bookService.getAllBooks(page, limit);

      // Handle pagination response
      setBooks(booksData.docs || []);
      setPagination({
        currentPage: booksData.page || 1,
        totalPages: booksData.totalPages || 1,
        totalDocs: booksData.totalDocs || 0,
        limit: booksData.limit || limit,
        hasNextPage: booksData.hasNextPage || false,
        hasPrevPage: booksData.hasPrevPage || false
      });
    } catch (err) {
      setError(err.message);
    } finally {
      if (isInitialLoad) {
        setLoading(false);
      } else {
        setPaginationLoading(false);
      }
    }
  };

  const handleAddBook = async (bookData) => {
    try {
      setFormLoading(true);
      setError('');
      await bookService.createBook(bookData);
      // Refresh the current page to show the new book
      await fetchBooks(pagination.currentPage, pagination.limit);
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

      // If this was the last item on the current page and not page 1, go to previous page
      const remainingItems = books.length - 1;
      if (remainingItems === 0 && pagination.currentPage > 1) {
        setPagination(prev => ({ ...prev, currentPage: prev.currentPage - 1 }));
      } else {
        // Refresh current page
        await fetchBooks(pagination.currentPage, pagination.limit);
      }

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

  const handlePageChange = (page) => {
    setPagination(prev => ({ ...prev, currentPage: page }));
  };

  const handleLimitChange = (newLimit) => {
    setPagination(prev => ({
      ...prev,
      limit: newLimit,
      currentPage: 1 // Reset to first page when changing limit
    }));
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
              Book Collection ({pagination.totalDocs} total)
            </h2>

            {loading ? (
              <div className="loading">
                <Loader2 size={24} className="animate-spin" />
                Loading books...
              </div>
            ) : !Array.isArray(books) || books.length === 0 ? (
              <div className="empty-state">
                <BookOpen size={48} className="empty-state-icon" />
                <h3>No books in your library yet</h3>
                <p>Start building your collection by adding your first book!</p>
              </div>
            ) : (
              <>
                <div className={`books-grid ${paginationLoading ? 'loading-overlay' : ''}`}>
                  {paginationLoading && (
                    <div className="pagination-loading">
                      <Loader2 size={24} className="animate-spin" />
                      Loading...
                    </div>
                  )}
                  {books.map(book => (
                    <BookCard
                      key={book._id}
                      book={book}
                      onEdit={setEditingBook}
                      onDelete={handleDeleteBook}
                    />
                  ))}
                </div>

                <Pagination
                  currentPage={pagination.currentPage}
                  totalPages={pagination.totalPages}
                  totalDocs={pagination.totalDocs}
                  limit={pagination.limit}
                  onPageChange={handlePageChange}
                  onLimitChange={handleLimitChange}
                />
              </>
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
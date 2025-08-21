import { useState, useEffect } from 'react';
import { Plus, Save, X } from 'lucide-react';

const BookForm = ({ onSubmit, editingBook, onCancel, loading }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    publishedYear: ''
  });

  useEffect(() => {
    if (editingBook) {
      setFormData({
        title: editingBook.title || '',
        author: editingBook.author || '',
        genre: editingBook.genre || '',
        publishedYear: editingBook.publishedYear || ''
      });
    } else {
      setFormData({
        title: '',
        author: '',
        genre: '',
        publishedYear: ''
      });
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const bookData = {
      ...formData,
      publishedYear: formData.publishedYear ? parseInt(formData.publishedYear) : undefined
    };

    onSubmit(bookData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.title.trim() && formData.author.trim();

  return (
    <div className="add-book-form">
      <h2 className="section-title">
        {editingBook ? (
          <>
            <Save size={24} />
            Edit Book
          </>
        ) : (
          <>
            <Plus size={24} />
            Add New Book
          </>
        )}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter book title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author" className="form-label">
            Author *
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter author name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre" className="form-label">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter genre (optional)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="publishedYear" className="form-label">
            Published Year
          </label>
          <input
            type="number"
            id="publishedYear"
            name="publishedYear"
            value={formData.publishedYear}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter year (optional)"
            min="1000"
            max={new Date().getFullYear()}
          />
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isFormValid || loading}
            style={{ width: '100%', marginBottom: editingBook ? '0.5rem' : '0' }}
          >
            {loading ? (
              'Saving...'
            ) : editingBook ? (
              <>
                <Save size={16} />
                Update Book
              </>
            ) : (
              <>
                <Plus size={16} />
                Add Book
              </>
            )}
          </button>

          {editingBook && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
              style={{ width: '100%' }}
            >
              <X size={16} />
              Cancel Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookForm;
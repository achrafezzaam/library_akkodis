import { Edit, Trash2, Calendar, Tag } from 'lucide-react';

const BookCard = ({ book, onEdit, onDelete }) => {
  return (
    <div className="book-card">
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">by {book.author}</p>
      
      <div className="book-details">
        {book.genre && (
          <span className="book-genre">
            <Tag size={14} />
            {book.genre}
          </span>
        )}
        {book.publishedYear && (
          <span className="book-year">
            <Calendar size={14} />
            {book.publishedYear}
          </span>
        )}
      </div>

      <div className="book-actions">
        <button 
          className="btn btn-secondary"
          onClick={() => onEdit(book)}
          title="Edit book"
        >
          <Edit size={16} />
          Edit
        </button>
        <button 
          className="btn btn-danger"
          onClick={() => onDelete(book._id)}
          title="Delete book"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
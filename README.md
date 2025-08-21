# Library Management System

A complete, professional library management system with a Node.js/Express backend and a modern React frontend.

## 🌟 Features

### Backend (Node.js + Express + MongoDB)
- RESTful API for book management
- CRUD operations (Create, Read, Update, Delete)
- MongoDB integration with Mongoose
- CORS enabled for frontend communication
- Input validation and error handling

### Frontend (React + Vite)
- **Professional Design**: Welcoming, calm, and luxurious aesthetic
- **Modern UI**: Clean interface with smooth animations
- **Responsive Layout**: Works on desktop and mobile
- **Real-time Updates**: Instant feedback for all operations
- **Book Management**: Complete CRUD interface

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation & Setup

1. **Clone and install all dependencies:**
```bash
git clone <repository-url>
cd library-management-system
npm run install-all
```

2. **Configure the backend:**
```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB connection string
```

3. **Start both frontend and backend:**
```bash
# From the root directory
npm run dev
```

This will start:
- Backend server on `http://localhost:3000`
- Frontend client on `http://localhost:5173`

### Individual Commands

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

## 📁 Project Structure

```
library-management-system/
├── server/                 # Backend (Node.js + Express)
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── server.js         # Main server file
├── client/               # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── services/     # API services
│   │   └── App.jsx       # Main app component
│   └── public/           # Static assets
└── README.md
```

## 🎨 Design Philosophy

The frontend follows a **welcoming, calm, and luxurious** design approach:

- **Warm Color Palette**: Soft browns and creams reminiscent of classic libraries
- **Typography**: Clean, readable Inter font with proper hierarchy  
- **Spacing**: Generous whitespace for a calm, uncluttered experience
- **Interactions**: Smooth transitions and elegant hover effects
- **Professional Layout**: Grid-based design with beautiful cards and forms

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Get all books |
| POST | `/api/books` | Create a new book |
| GET | `/api/books/:id` | Get a specific book |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |

## 📊 Book Model

```javascript
{
  title: String (required),
  author: String (required), 
  genre: String (optional),
  publishedYear: Number (optional)
}
```

## 🛠️ Technologies Used

### Backend
- Node.js & Express.js
- MongoDB & Mongoose
- CORS middleware
- dotenv for environment variables

### Frontend  
- React 19 with hooks
- Vite for fast development
- Axios for HTTP requests
- Lucide React for icons
- Custom CSS with animations

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or your preferred MongoDB hosting
2. Configure environment variables
3. Deploy to your preferred platform (Heroku, Railway, etc.)

### Frontend Deployment
1. Update API base URL in `client/src/services/api.js`
2. Build the project: `cd client && npm run build`
3. Deploy the `dist` folder to your preferred hosting (Vercel, Netlify, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for professional library management
- Focused on user experience and clean code

A simple and efficient full-stack web application for managing a library's book collection. Built with the MERN stack (MongoDB, Express.js, React, Node.js), this project provides a clean interface and a robust backend to handle core library functions.

## Features

- View All Books: See a complete list of all books available in the library.

- Add a New Book: Easily add new books to the collection with details like title, author, genre, and publication year.

- Update Book Details: Edit the information of any existing book.

- Delete a Book: Remove books from the collection.

- View Single Book: Get detailed information for a specific book.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have the following software installed on your machine:

- Node.js (which includes npm)

- MongoDB (Make sure it's installed and running locally)

### Installation

1. Clone the repository

```
git clone https://github.com/your-username/library-management-system.git
cd library-management-system
```

2. Install Backend Dependencies

Navigate to the server directory and install the required npm packages.
```
cd server
npm install
```

3. Install Frontend Dependencies

Navigate to the client directory and install the required npm packages.

```
cd ../client
npm install
```

## Running the Project

You will need to run the backend server and the frontend client in two separate terminals.

1. Start the Backend Server

From the server directory, run the following command to start the Node.js/Express server. The server will run on http://localhost:3000.

```
# From ./server
npm run dev
```

2. Start the Frontend React App

From the client directory, run the following command to start the React development server. The application will open automatically in your browser at http://localhost:5173.

```
# From ./client
npm start
```

Your application is now running! The React frontend will communicate with the Express backend to manage the library's books.

## API Endpoints

The backend server provides the following RESTful API endpoints for managing books.

| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| GET    | /api/books     | Get a list of all books.     |
| POST   | /api/books     | Add a new book.              |
| GET    | /api/books/:id | Get a single book by its ID. |
| PUT    | /api/books/:id | Update a book by its ID.     |
| DELETE | /api/books/:id | Delete a book by its ID.     |

## Technologies Used

- MongoDB: NoSQL database for storing book data.

- Express.js: Backend web framework for Node.js.

- React: Frontend library for building the user interface.

- Node.js: JavaScript runtime for the server.

- Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
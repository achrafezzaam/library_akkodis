# Library Management System - Frontend

A modern, elegant frontend client for the Library Management System built with React and Vite.

## Features

- **Professional Design**: Welcoming, calm, and luxurious aesthetic perfect for a library application
- **Book Management**: Complete CRUD operations for books (Create, Read, Update, Delete)
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Instant feedback for all operations
- **Modern UI**: Clean interface with smooth animations and professional typography

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Axios** - HTTP client for API communication
- **Lucide React** - Beautiful, consistent icons
- **CSS3** - Custom styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend server running on port 3000

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Backend Connection

The frontend is configured to connect to the backend API at `http://localhost:3000/api`. Make sure your backend server is running before starting the frontend.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The frontend communicates with the backend through the following endpoints:

- `GET /api/books` - Fetch all books
- `POST /api/books` - Create a new book
- `GET /api/books/:id` - Fetch a specific book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

## Design Philosophy

The application follows a **welcoming, calm, and luxurious** design philosophy:

- **Warm Color Palette**: Soft browns and creams reminiscent of aged paper and leather-bound books
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Generous whitespace for a calm, uncluttered feel
- **Interactions**: Smooth transitions and hover effects
- **Professional Layout**: Grid-based design with elegant cards and forms

## Project Structure

```
src/
├── components/
│   ├── BookCard.jsx      # Individual book display component
│   └── BookForm.jsx      # Add/Edit book form component
├── services/
│   └── api.js           # API service layer
├── App.jsx              # Main application component
├── App.css              # Application styles
├── index.css            # Global styles
└── main.jsx             # Application entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the Library Management System.
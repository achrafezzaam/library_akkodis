const express = require('express');
const cors = require('cors');
const bookRouter = require('./routes/bookRoutes');
const {port, connectDB} = require('./config/db');

const allowedOrigins = ["http://localhost:5173"];

connectDB();

app = express();

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hellow World!\n');
});

app.use('/api/books', bookRouter);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

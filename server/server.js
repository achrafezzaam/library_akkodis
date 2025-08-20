const express = require('express');
const bookRouter = require('./routes/bookRoutes');
const {port, connectDB} = require('./config/db');

connectDB();

app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hellow World!\n');
});

app.use('/api/books', bookRouter);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
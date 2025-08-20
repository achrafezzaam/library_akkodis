const express = require('express');
// const postRouter = require('./routes/bookRoutes');
const {port, connectDB} = require('./config/db');

connectDB();

app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hellow World!\n');
});

// app.use('/api/books', postRouter);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
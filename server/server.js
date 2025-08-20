const express = require('express');
const postRouter = require('./routes/bookRoutes');

app = express();
port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hellow World!\n');
});

app.router('/api/books', postRouter);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
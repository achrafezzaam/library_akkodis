const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: String,
    publishedYear: Number,
});

bookSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Book', bookSchema);
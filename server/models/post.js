const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Enter a title'
    },
    summary: {
        type: String,
        required: 'Enter a title'
    },
    text: {
        type: String,
        required: 'Enter a title'
    },
    authorId: {
        type: Number,
    },
    categoryId: {
        type: Number,
    },
    imagePath: {
        type: String,
    },
    labels: {
        type: String,
    },
    type: {
        type: Number,
    },
    status: {
        type: Number,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

PostSchema.plugin(timestamps);

module.exports = mongoose.model('Post', PostSchema);
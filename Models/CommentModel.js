const mongoose = require("mongoose")

const Comment = mongoose.model(
    "Comment",
    new mongoose.Schema({
        username: String,
        text: String,
        CreatedAt : Date
    })
);

module.exports = Comment
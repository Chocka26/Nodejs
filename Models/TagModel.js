const mongoose =require("mongoose")
const Post = require("./PostModel")

const Tag = mongoose.model(
    "Tag",
    new mongoose.Schema({
        name: String,
        slug: String,
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post"
            }
        ]
    })
);

module.exports = Tag;
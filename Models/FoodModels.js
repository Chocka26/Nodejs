const mongoose = require("mongoose")

const FoodSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true },
    description: {type: String},
    price: {type: Number},
    isbn: {type: String}
}, {timestamps: true})

module.exports = mongoose.model("Food",FoodSchema)
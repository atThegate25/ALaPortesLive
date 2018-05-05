const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    quantity: {
        type: Number,
    }
});

const STBProducts = mongoose.model("STBProducts", ProductSchema);

module.exports = STBProducts;
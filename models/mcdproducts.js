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

const MCDProducts = mongoose.model("MCDProducts", ProductSchema);

module.exports = MCDProducts;
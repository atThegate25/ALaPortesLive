const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    quantity: {
        type: Number,
    },

    price: {
        type: Number,
    },

    image: {
        type: String,
    }

});

const PBYProducts = mongoose.model("PBYProducts", ProductSchema);

module.exports = PBYProducts;
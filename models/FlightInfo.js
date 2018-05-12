const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    terminal: {
        type: String,
        trim: true
    },
    gate: {
        type: String,
        trim: true
    }
});

const FlightInfo = mongoose.model("FlightInfo", ProductSchema);

module.exports = FlightInfo;
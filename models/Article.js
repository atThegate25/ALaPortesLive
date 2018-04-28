const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const ArticleSchema = new Schema({
    // `title` is a required and unique of type String
    title: {
        type: String,
        unique: true,
        required: true
    },
    // `link` is required and of type String
    weblink: {
        type: String,
        required: true
    },
    mydomain: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated Note
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

//check for duplicate database entries and report them just like any other validation error
ArticleSchema.plugin(uniqueValidator);
// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
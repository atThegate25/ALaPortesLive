const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes")
const bodyParser = require("body-parser");
const Router = express.Router()
const mongoose = require("mongoose");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper";
mongoose.connect(MONGODB_URI);

// Routes
app.use(routes);

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
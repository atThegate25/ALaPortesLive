const db = require("../models")

module.exports = {

    find: function(req, res) {

        db.Article.find({}).then(function(dbArticles) {
            res.render("index", {
                articles: dbArticles
            });
            console.log(dbArticles);

        });
        // db.note.find({}).populate("note")
        //     // now, execute our query
        //     .exec(function(error, dbNote) {
        //         // Log any errors
        //         if (error) {
        //             console.log(error // Otherwise, send the doc to the browser as a json object
        //             );
        //         } else {
        //             res.render("index", { note: dbNote });
        //             // res.json (doc);
        //         }
        //     });
        // .then(function(dbNote) {
        //     res.render("index", {
        //         notes: dbNote
        //     });
        // });

    }
}
const db = require("../models");
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");

//package for formatting dates to front end
const dateFormat = require('dateformat');
const now = new Date();

module.exports = {
    find: function(req, res) {
        // Find all Articles
        db.Article.find({}).sort({ _id: -1 })
            .then(function(dbArticle) {
                // If all Articles are successfully found, send them back to the client
                res.json(dbArticle);
            })
            .catch(function(err) {
                // If an error occurs, send the error back to the client
                res.json(err);
                console.log(dbArticle.note)
            });
    },
    createNote: function(req, res) {
        // save the new note that gets posted to the Notes collection
        db.Note.create(req.body)
            // then find an article from the req.params.id
            // and update it's "note" property with the _id of the new note
            .then(function(dbNote) {
                return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id })
                    .populate("note")
                    .then(function(dbArticle) {
                        res.json(dbArticle)
                    })
                    .catch(function(err) {
                        // If an error occurred, send it to the client
                        res.json(err);
                    });
            });
    },
    findOne: function(req, res) {
        db.Article.findOne({ _id: req.params.id })
            // Specify that we want to populate the retrieved libraries with any associated notes
            .populate("note")
            .then(function(dbArticle) {
                // If any Articles are found, send them to the client with any associated notes
                res.json(dbArticle);
            })
            .catch(function(err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    },
    cnnScrape: function(req, res) {
        // Grab the body of the html with request
        axios.get(`https://api.foursquare.com/v2/venues/search?
        client_id=L2305LTMO2LMENJKZKADWDFZYYHKXQWVJOAXCP2HYAD0NNZN
        &client_secret=DSXYJ3GJD1WVAEQJFXHQOVVWQQPCULYZE3AF2DD40IMKICVL
        &ll=41.987769800%2C%20-87.882901200
        &intent=%22crossStreet%22%3A%20%22ORD%20Airport%22&query=mcdonalds
        &v=20180405&limit=10`)
            .then(function(response) {
                // Load that into cheerio and save it to $ for a shorthand selector
                const $ = cheerio.load(response.data);
                // const url = Handlebars.escapeExpression(my_weblink.url);
                // Now, we grab every h2 within an article tag, and do the following:
                $("h3.cd__headline").each(function(i, element) {
                    // Save an empty result object
                    const result = {};

                    // Add the text and href of every weblink, and save them as properties of the result object
                    result.title = $(this)
                        .text();
                    result.weblink = $(this)
                        .children("a")
                        .attr("href");
                    result.mydomain = "cnn.com";
                    // "<a href='" + url + "'></a>";
                    result.date = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

                    // Create a new Article using the `result` object built from scraping
                    db.Article.create(result)
                        .then(function(dbArticle) {
                            // View the added result in the console
                            console.log(dbArticle);
                        })
                        .catch(function(err) {
                            // If an error occurred, send it to the client
                            return res.json(err);
                        });
                });

                // If we were able to successfully scrape and save an Article, send a message to the client
                res.send("Scrape Complete");
                // res.send(alert("You have successfully scraped CNN articles, redirecting to your results!!!"));
            });
        res.redirect("/#scrapelocale");
    },
    foxScrape: function(req, res) {
        // Grab the body of the html with request
        axios.get("http://www.foxnews.com/world.html").then(function(response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            const $ = cheerio.load(response.data);

            // Now, we grab every h2 within an article tag, and do the following:
            $("header.info-header").each(function(i, element) {
                // Save an empty result object
                const result = {};

                // Add the text and href of every weblink, and save them as properties of the result object
                result.title = $(this)
                    .children("h2.title")
                    .text();
                result.weblink = $(this)
                    .children("h2.title")
                    .children("a")
                    .attr("href");
                result.mydomain = "foxnews.com";
                result.date = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

                // Create a new Article using the `result` object built from scraping
                db.Article.create(result)
                    .then(function(dbArticle) {
                        // View the added result in the console
                        console.log(dbArticle);
                    })
                    .catch(function(err) {
                        // If an error occurred, send it to the client
                        return res.json(err);
                    });
            });

            // If we were able to successfully scrape and save an Article, send a message to the client
            res.send("Scrape Complete");
        });
        res.redirect("/#scrapelocale");
    },
    msnbcScrape: function(req, res) {
        // Grab the body of the html with request
        axios.get("http://www.msnbc.com/").then(function(response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            const $ = cheerio.load(response.data);

            // Now, we grab every h2 within an article tag, and do the following:
            $("h2.featured-slider__teaser__title").each(function(i, element) {
                // Save an empty result object
                const result = {};

                // Add the text and href of every weblink, and save them as properties of the result object
                result.title = $(this)
                    .text();
                result.weblink = $(this)
                    .children("a")
                    .attr("href");
                result.mydomain = "msnbc.com";
                result.date = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

                // Create a new Article using the `result` object built from scraping
                db.Article.create(result)
                    .then(function(dbArticle) {
                        // View the added result in the console
                        console.log(dbArticle);
                    })
                    .catch(function(err) {
                        // If an error occurred, send it to the client
                        return res.json(err);
                    });
            });

            // If we were able to successfully scrape and save an Article, send a message to the client
            res.send("Scrape Complete");
        });
        res.redirect("/#scrapelocale");
    }

};
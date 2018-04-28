const router = require("express").Router();
const nrc = require("../controllers");

//localhost/products/
router.get("/scrapecnn", nrc.newsRoomControllers.cnnScrape);
router.get("/scrapefoxnews", nrc.newsRoomControllers.foxScrape);
router.get("/scrapemsnbc", nrc.newsRoomControllers.msnbcScrape);
router.get("/articles", nrc.newsRoomControllers.find);
router.get("/articles/:id", nrc.newsRoomControllers.findOne);
router.post("/articles/:id", nrc.newsRoomControllers.createNote);

module.exports = router;
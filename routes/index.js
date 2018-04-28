const router = require("express").Router();
const newsRouter = require("./apiRoutes");
const htmlRouter = require("./htmlRoutes")
    // console.log(newsRouter);


router.use("/", newsRouter)
router.use("/", htmlRouter)

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;
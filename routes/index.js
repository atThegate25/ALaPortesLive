const router = require("express").Router();
const path = require("path");
const orderRoute = require("./apiRoutes");



router.use("/", orderRoute)
// router.use("/", htmlRouter)

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;
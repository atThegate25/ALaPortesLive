const router = require("express").Router();
const htmlCtr = require("../controllers");

router.get("/", htmlCtr.htmlController.find);

module.exports = router;



// router.get("/", function (req, res) {
//     res.render("index");
// });

// module.exports = router;
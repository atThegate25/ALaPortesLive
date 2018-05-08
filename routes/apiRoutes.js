const axios = require("axios");
const router = require("express").Router();
const MCDProducts = require('../models/mcdproducts');
const PBYProducts = require('../models/pbyproducts');
const STBProductsStarbucks = require('../models/stbproducts');

//McDonalds Routes
// read all
router.get("/mcdapi/api", (req, res) => MCDProducts.find({}).then(dbMCDProducts => res.json(dbMCDProducts)));
// read one
router.get("/mcdapi/api/:id", (req, res) => MCDProducts.find({_id: req.params.id}).then(dbMCDProducts => res.json(dbMCDProducts)));
router.post("/mcdapi/api/", (req, res) => MCDProducts.create(req.body).then(dbMCDProducts => console.log(dbMCDProducts) 
// res.json(dbMCDProducts)
));
router.put("/mcdapi/:id", (req, res) => MCDProducts.updateOne({ _id: req.params.id }, req.body).then(dbMCDProducts => res.json(dbMCDProducts)));
router.delete("/mcdapi/:id", (req, res) => MCDProducts.deleteOne({_id: req.params.id}).then(dbMCDProducts=>res.json(dbMCDProducts)));

//Potbelly Routes
// read all
router.get("/pbyapi/api", (req, res) => PBYProducts.find({}).then(dbPBYProducts => res.json(dbPBYProducts)));
// read one
router.get("pbyapi/api/:id", (req, res) => PBYProducts.find({_id: req.params.id}).then(dbPBYProducts => res.json(dbPBYProducts)));
router.post("/pbyapi/api", (req, res) => PBYProducts.create(req.body).then(dbPBYProducts => res.json(dbPBYProducts)));
router.put("pbyapi/api/:id", (req, res) => PBYProducts.updateOne({ _id: req.params.id }, req.body).then(dbPBYProducts => res.json(dbPBYProducts)));
router.delete("pbyapi/api/:id", (req, res) => PBYProducts.deleteOne({_id: req.params.id}).then(dbPBYProducts=>res.json(dbPBYProducts)));

//Starbucks Routes
// read all
router.get("/stbapi/api", (req, res) => STBProducts.find({}).then(dbSTBProducts => res.json(dbSTBProducts)));
// read one
router.get("/stbapi/api/:id", (req, res) => STBProducts.find({_id: req.params.id}).then(dbSTBProducts => res.json(dbSTBProducts)));
router.post("/stbapi/api", (req, res) => STBProducts.create(req.body).then(dbSTBProducts => res.json(dbSTBProducts)));
router.put("/stbapi/api/:id", (req, res) => STBProducts.updateOne({ _id: req.params.id }, req.body).then(dbSTBProducts => res.json(dbSTBProducts)));
router.delete("/stbapi/api/:id", (req, res) => STBProducts.deleteOne({_id: req.params.id}).then(dbSTBProducts=>res.json(dbSTBProducts)));

module.exports = router;
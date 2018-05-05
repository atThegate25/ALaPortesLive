const axios = require("axios");
const router = require("express").Router();
const MCDProducts = require('../models/mcdproducts');
const Potbelly = require('../models/mcdproducts');
const Starbucks = require('../models/mcdproducts');

//McDonalds Routes
// read all
router.get("/", (req, res) => MCDProducts.find({}).then(dbMCDProducts => res.json(dbMCDProducts)));
// read one
router.get("/:id", (req, res) => MCDProducts.find({_id: req.params.id}).then(dbMCDProducts => res.json(dbMCDProducts)));
router.post("/api/", (req, res) => MCDProducts.create(req.body).then(dbMCDProducts => console.log(dbMCDProducts) 
// res.json(dbMCDProducts)
));
router.put("/:id", (req, res) => MCDProducts.updateOne({ _id: req.params.id }, req.body).then(dbMCDProducts => res.json(dbMCDProducts)));
router.delete("/:id", (req, res) => MCDProducts.deleteOne({_id: req.params.id}).then(dbMCDProducts=>res.json(dbMCDProducts)));

//Potbelly Routes
// read all
router.get("/", (req, res) => PBYProducts.find({}).then(dbPBYProducts => res.json(dbPBYProducts)));
// read one
router.get("/:id", (req, res) => PBYProducts.find({_id: req.params.id}).then(dbPBYProducts => res.json(dbPBYProducts)));
router.post("/", (req, res) => PBYProducts.create(req.body).then(dbPBYProducts => res.json(dbPBYProducts)));
router.put("/:id", (req, res) => PBYProducts.updateOne({ _id: req.params.id }, req.body).then(dbPBYProducts => res.json(dbPBYProducts)));
router.delete("/:id", (req, res) => PBYProducts.deleteOne({_id: req.params.id}).then(dbPBYProducts=>res.json(dbPBYProducts)));

//Starbucks Routes
// read all
router.get("/", (req, res) => STBProducts.find({}).then(dbSTBProducts => res.json(dbSTBProducts)));
// read one
router.get("/:id", (req, res) => STBProducts.find({_id: req.params.id}).then(dbSTBProducts => res.json(dbSTBProducts)));
router.post("/", (req, res) => STBProducts.create(req.body).then(dbSTBProducts => res.json(dbSTBProducts)));
router.put("/:id", (req, res) => STBProducts.updateOne({ _id: req.params.id }, req.body).then(dbSTBProducts => res.json(dbSTBProducts)));
router.delete("/:id", (req, res) => STBProducts.deleteOne({_id: req.params.id}).then(dbSTBProducts=>res.json(dbSTBProducts)));

module.exports = router;
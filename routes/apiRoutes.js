const axios = require("axios");
const router = require("express").Router();
const FlightInfo = require('../models/FlightInfo');
const PBYProducts = require('../models/pbyproducts');
const STBProductsStarbucks = require('../models/stbproducts');

//Flight Data Routes
// read all
router.get("/flight/api", (req, res) => FlightInfo.find({}).then(dbFlightInfo => res.json(dbFlightInfo)));
// read one
router.get("/flight/api/:id", (req, res) => FlightInfo.find({_id: req.params.id}).then(dbFlightInfo => res.json(dbFlightInfo)));
router.post("/flight/api/", (req, res) => FlightInfo.create(req.body).then(dbFlightInfo => res.json(dbFlightInfo) 
// res.json(dbFlightInfo)
));
router.put("/flight/:id", (req, res) => FlightInfo.updateOne({ _id: req.params.id }, req.body).then(dbFlightInfo => res.json(dbFlightInfo)));
router.delete("/flight/:id", (req, res) => FlightInfo.deleteOne({_id: req.params.id}).then(dbFlightInfo=>res.json(dbFlightInfo)));

//Cart Routes
// read all
router.get("/pbyapi/api", (req, res) => PBYProducts.find({}).then(dbPBYProducts => res.json(dbPBYProducts)));
// read one
router.get("/pbyapi/api/:id", (req, res) => PBYProducts.find({_id: req.params.id}).then(dbPBYProducts => res.json(dbPBYProducts)));
router.post("/pbyapi/api", (req, res) => PBYProducts.create(req.body).then(dbPBYProducts => res.json(dbPBYProducts)));
router.put("/pbyapi/api/:id", (req, res) => PBYProducts.updateOne({ _id: req.params.id }, req.body).then(dbPBYProducts => res.json(dbPBYProducts)));
router.delete("/pbyapi/api/:id", (req, res) => PBYProducts.deleteOne({_id: req.params.id}).then(dbPBYProducts=>res.json(dbPBYProducts)));

//Starbucks Routes
// read all
router.get("/stbapi/api", (req, res) => STBProducts.find({}).then(dbSTBProducts => res.json(dbSTBProducts)));
// read one
router.get("/stbapi/api/:id", (req, res) => STBProducts.find({_id: req.params.id}).then(dbSTBProducts => res.json(dbSTBProducts)));
router.post("/stbapi/api", (req, res) => STBProducts.create(req.body).then(dbSTBProducts => res.json(dbSTBProducts)));
router.put("/stbapi/api/:id", (req, res) => STBProducts.updateOne({ _id: req.params.id }, req.body).then(dbSTBProducts => res.json(dbSTBProducts)));
router.delete("/stbapi/api/:id", (req, res) => STBProducts.deleteOne({_id: req.params.id}).then(dbSTBProducts=>res.json(dbSTBProducts)));

module.exports = router;
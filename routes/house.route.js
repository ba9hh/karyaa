const express = require("express");
const House = require("../models/house.model")
const router = express.Router();
const {getHouses,getHouse,createHouse,updateHouse,deleteHouse}=require("../controllers/house.controller");


router.get("/",getHouses);

router.get("/:id",getHouse);

router.post("/",createHouse);

router.put("/:id",updateHouse);

router.delete("/:id",deleteHouse);

module.exports = router;
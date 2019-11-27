const express = require("express");
const router = express.Router();
const Woman = require("../../models/Woman");
const Man = require("../../models/Man");
const Accessories = require("../../models/Accessories");

router.get("/:id", async (req, res) => {
  let womenGoodID = await Woman.find({ _id: req.params.id })
  let menGoodID = await Man.find({ _id: req.params.id })
  let accessoryID = await Accessories.find({ _id: req.params.id })
  
  return res.send({women: womenGoodID, men: menGoodID, acs: accessoryID})
  });

module.exports = router;

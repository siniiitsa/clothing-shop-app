const express = require("express");
const router = express.Router();
const Man = require("../../models/Man");
const Accessories = require("../../models/Accessories");
const Woman = require("../../models/Woman");
const { getCategory, sortByNewCollections } = require("../../controllers/category");

router.get("/", async (req, res) => {
    const { collection } = req.query;
    try {
        if(collection === "mens") {
            let menGoods = await Man.find();
            return res.status(200).json({mens: menGoods});
        } else if(collection === "womens") {
            let womensGoods = await Woman.find();
            return res.status(200).json({womens: womensGoods});
        } else if(collection === "accessories") {
            let acsGoods = await Accessories.find();
            return res.status(200).json({acs: acsGoods});
        } else {
            return res.send("Wrong url")
        }
    } catch (error) {
        return res.status(500).json({error: "Server Error"});
    }
});

router.get("/category", getCategory);
router.get("/new-collections", sortByNewCollections);

module.exports = router;

const express = require("express");
const router = express.Router();
const { Cattle } = require("../../db/models");

// ROUTE TO GET ALL OF THE Cattle
router.get("/", async (_req, res, next) => {
  try {
    const CattleInfo = await Cattle.findAll();
    res.json(CattleInfo);
  } catch (error) {
    next(error)
  }
});

router.post('/', async (req, res, next) => {
  try {
   
    const { name, description, pricePerBag, pricePer20, pricePer40, url } = req.body;

    // Create a new Cattle record
    const newCattle = await Cattle.create({
      name,
      description,
      pricePerBag,
      pricePer20,
      pricePer40,
      url,
    });

  
    res.status(201).json(newCattle);
  } catch (error) {

    next(error);
  }
});


module.exports = router;

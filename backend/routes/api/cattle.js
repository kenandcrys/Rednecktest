const express = require("express");
const router = express.Router();
const { Cattle } = require("../../db/models");

// ROUTE TO GET ALL OF THE Cattle
router.get("/", async (_req, res, next) => {
  try {
    const cattle = await Cattle.findAll();
    
    res.json(cattle);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

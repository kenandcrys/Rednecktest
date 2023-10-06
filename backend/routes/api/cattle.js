const express = require("express");
const router = express.Router();
const { cattle } = require("../../db/models");

// ROUTE TO GET ALL OF THE cattle
router.get("/", async (_req, res, next) => {
  try {
    const cattleInfo= await cattle.findAll();
    
    res.json(cattleInfo);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

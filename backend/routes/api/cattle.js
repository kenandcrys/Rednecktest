const express = require("express");
const router = express.Router();
const { Cattle } = require("../../db/models");

// ROUTE TO GET ALL OF THE Cattle
router.get("/", async (_req, res, next) => {
  try {
    const CattleInfo = await Cattle.findAll();

    res.json(CattleInfo);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

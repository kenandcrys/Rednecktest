// backend/routes/api/index.js
const router = require("express").Router();
const sessionRouter = require("./session.js");
const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
router.use(restoreUser);

//const routes = require('./routes');
const CattleRouter = require("./Cattle.js");

// Register your API routes
router.use("/cattle", CattleRouter);
//app.use(routes);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;

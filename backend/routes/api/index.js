// backend/routes/api/index.js
const router = require("express").Router();

const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
router.use(restoreUser);

//const routes = require('./routes');
const CattleRouter = require("./Cattle.js");

// Register your API routes
router.use("/cattle", CattleRouter);
//app.use(routes);

module.exports = router;

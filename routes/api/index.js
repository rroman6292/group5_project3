const router = require("express").Router();
const bookRoutes = require("./books");
const homeownerRoutes = require("./homeowners")

// homeowner routes
router.use("/homeowners", homeownerRoutes);

module.exports = router;

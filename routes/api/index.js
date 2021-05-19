const router = require("express").Router();
const homeownerRoutes = require("./homeowners")
const landscaperRoutes = require("./landscape")

// homeowner routes
router.use("/homeowners", homeownerRoutes);
router.use("/landscape", landscaperRoutes);

module.exports = router;

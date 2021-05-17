const router = require("express").Router();
const homeownerController = require("../../controllers/homeownerController");

router
  .route("/:id")
  .get(homeownerController.findById)
  .put(homeownerController.update)
  .delete(homeownerController.remove);

module.exports = router;
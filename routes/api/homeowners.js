const router = require("express").Router();
const homeownerController = require("../../controllers/homeownerController");

router
  .route("/:id")
  .get(homeownerController.findById)
  .post(homeownerController.create)
  .put(homeownerController.update)
  .delete(homeownerController.remove);

module.exports = router;
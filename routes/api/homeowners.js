const router = require("express").Router();
const homeownerController = require("../../controllers/homeownerController");

router.route("/")
  .post(homeownerController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(homeownerController.findById)
  .put(homeownerController.update)
  .delete(homeownerController.remove);

module.exports = router;
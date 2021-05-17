const router = require("express").Router();
const landscapeController = require("../../controllers/landscapeController");

// Matches with "/api/books"
router.route("/")
  .get(landscapeController.findAll)
  .post(landscapeController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(landscapeController.findById)
  .put(landscapeController.update)
  .delete(landscapeController.remove);

module.exports = router;

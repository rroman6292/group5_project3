const router = require("express").Router();
const landscapeController = require("../../controllers/landscapeController");
const auth = require("../../utils/auth")

// Matches with "/api/books"
router.route("/")
  .get(landscapeController.findAll)
  .post(landscapeController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(auth.authMiddleware, landscapeController.findById)
  .put(auth.authMiddleware, landscapeController.update)
  .delete(auth.authMiddleware, landscapeController.remove);

  router.route("/login")
  .post(landscapeController.login);

module.exports = router;

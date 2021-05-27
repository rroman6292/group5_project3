const router = require("express").Router();
const homeownerController = require("../../controllers/homeownerController");
const auth = require("../../utils/auth")

router.route("/")
  .post(homeownerController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(auth.authMiddleware, homeownerController.findById)
  .put(auth.authMiddleware, homeownerController.update)
  .delete(auth.authMiddleware, homeownerController.remove);

  router.route("/login")
  .post(homeownerController.login);

module.exports = router;
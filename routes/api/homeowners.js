const router = require("express").Router();
const homeownerController = require("../../controllers/homeownerController");
const auth = require("../../utils/auth")

router.route("/tickets")
.get(homeownerController.findAllTickets);

router
  .route("/:id")
  .get(auth.authMiddleware, homeownerController.findById)
  // .put(auth.authMiddleware, homeownerController.update)
  .put(homeownerController.update)
  .delete(auth.authMiddleware, homeownerController.remove);

  router.route("/login")
  .post(homeownerController.login);

 

  router.route("/")
  .post(homeownerController.create);



module.exports = router;
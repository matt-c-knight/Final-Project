const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const contactsController = require("../../controllers/contactsController");

// Matches with "/api/books"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);
router.route("/:userId/contacts")
  .get(contactsController.findByUserId)
router.route("/login")
  .post(usersController.findOne);
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
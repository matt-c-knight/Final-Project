const router = require("express").Router();
const contactsController = require("../../controllers/contactsController");

// Matches with "/api/books"
router.route("/")
  .get(contactsController.findAll)
  .post(contactsController.create);
  
  // router.route("/get")
  // .post(contactsController.findOne);
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(contactsController.findById)
  .put(contactsController.update)
  .delete(contactsController.remove);

module.exports = router;
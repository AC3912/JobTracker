const router = require("express").Router();
const userController = require("../controllers/usersController");

// Create a new user.
router.post("/", userController.createAccount);
router.post("/login", userController.login);

module.exports = router;

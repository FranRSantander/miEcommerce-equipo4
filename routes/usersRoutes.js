const router = require("express").Router();
const usersController = require("../controllers/usersController");
const {validationsLogin, validationsRegister} = require("../middlewares/validations");

// Register & Login
router.get("/register", usersController.renderRegister);

router.post("/register", validationsRegister, usersController.registerUser);

router.get("/login", usersController.renderLogin);

router.post("/login", validationsLogin, usersController.login);

router.get("/checkout", (req, res) => {
  res.render("checkout");
});

router.get("/cart", (req, res) => {
  res.render("cart");
});

module.exports = router;

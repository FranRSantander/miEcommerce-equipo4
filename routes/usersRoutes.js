const router = require("express").Router();
const usersController = require("../controllers/usersController");

// Register & Login
router.get("/register", usersController.renderSite);

router.post("/register", usersController.registerUser);

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/checkout", (req, res) => {
  res.render("checkout");
});

router.get("/cart", (req, res) => {
  res.render("cart");
});

module.exports = router;

const router = require("express").Router();
const usersController = require("../controllers/usersController");

// Register & Login
router.get("/register", usersController.renderSite);

router.post("/register", usersController.registerUser);

router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.get("/checkout", (req, res) => {
  res.render("pages/checkout");
});

router.get("/cart", (req, res) => {
  res.render("pages/cart");
});

module.exports = router;

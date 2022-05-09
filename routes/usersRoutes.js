const router = require("express").Router();
const usersController = require("../controllers/usersController");
const { check } = require("express-validator");

const validations = [
  check("email")
    .notEmpty()
    .withMessage("Debe ingresar un email")
    .bail()
    .isEmail()
    .withMessage("Debe ingresar un email válido"),
  check("password1")
    .notEmpty()
    .withMessage("Debe ingresar una contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener 8 caracteres como mínimo"),
  check("password2")
    .notEmpty()
    .withMessage("Debe ingresar una contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener 8 caracteres como mínimo"),
];

// Register & Login
router.get("/register", usersController.renderPage);

router.post("/register", validations, usersController.registerUser);

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

const { check } = require("express-validator");


const validationsRegister = [
    check("email")
      .notEmpty().withMessage("Debe ingresar un email")
      .bail()
      .isEmail().withMessage("Debe ingresar un email válido"),
    check("password1")
      .notEmpty().withMessage("Debe ingresar una contraseña")
      .bail()
      .isLength({ min: 8 }).withMessage("La contraseña debe tener 8 caracteres como mínimo"),
     check("password2")
      .notEmpty().withMessage("Debe ingresar una contraseña")
      .bail()
      .isLength({ min: 8 }).withMessage("La contraseña debe tener 8 caracteres como mínimo")
  ];

   let validationsLogin = [
    check("email")
    .notEmpty()
    .withMessage("Debe ingresar un email")
    .bail()
    .isEmail()
    .withMessage("Debe ingresar un email válido")
  ]
   
  module.exports = {validationsRegister, validationsLogin}
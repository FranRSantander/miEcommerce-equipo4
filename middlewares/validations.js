const { check } = require("express-validator");
const fs = require("fs");

const validationsRegister = [
    check("email")
      .notEmpty()
      .withMessage("Debe ingresar un email")
      .bail()
      .isEmail()
      .withMessage("Debe ingresar un email válido")
      .custom((value, { req }) => {
        return new Promise((resolve, reject) => {
          const arrayUsersObjects = JSON.parse(fs.readFileSync("./db/users.json", "utf-8"));
          arrayUsersObjects.forEach((element) => {
            if (value === element.email) {
              reject(new Error("el email ya está registrado"));
            }
          });
          resolve(true);
        });
      }),

    check("password1")
      .notEmpty()
      .withMessage("Debe ingresar una contraseña")
      .bail()
      .isLength({ min: 8 })
      .withMessage("La contraseña debe tener 8 caracteres como mínimo").bail()
      .custom((value, { req }) => {
        return new Promise((resolve, reject) => {
          
            if (value[0] === " " || value[value.length - 1] === " ") {
              reject(new Error("No puede haber espacios"));
            }
            resolve(true);
          });
        }).bail()
        .custom((value, { req }) => {
          return new Promise((resolve, reject) => {
              if (typeof(user.contrasenia) !== Number) {
                reject(new Error("La contraseña debe ser numérica"));
              }
              resolve(true);
            });
          }),
          
    check("password2")
      .notEmpty()
      .withMessage("Debe ingresar una contraseña")
      .bail()
      .isLength({ min: 8 })
      .withMessage("La contraseña debe tener 8 caracteres como mínimo")
      .custom((value, { req }) => {                                             
        return new Promise((resolve, reject) => {
          const password1 = req.body.password1;
          if (value !== password1) {
              reject(new Error("La confirmación de la contraseña debe ser igual a la contraseña"));
            }
          resolve(true);
        })
        }).bail()
      .custom((value, { req }) => {
        return new Promise((resolve, reject) => {
            if (value[0] === " " || value[value.length - 1] === " ") {
                reject(new Error("No puede haber espacios"));
            }
            resolve(true);
            });   
        }).bail()
        .custom((value, { req }) => {
          return new Promise((resolve, reject) => {
              if (typeof(user.contrasenia) !== Number) {
                reject(new Error("La contraseña debe ser numérica"));
              }
              resolve(true);
            });
          })
  ];

  let validationsLogin = [
    check("email")
    .notEmpty()
    .withMessage("Debe ingresar un email")
    .bail()
    .isEmail()
    .withMessage("Debe ingresar un email válido")
    .custom((value, { req }) => {
      return new Promise((resolve, reject) => {
        const arrayUsersObjects = JSON.parse(fs.readFileSync("./db/users.json", "utf-8"));
        arrayUsersObjects.forEach((element) => {
          if (value === element.email) {
            resolve(true);
          }
          reject(new Error("El email no está registrado"));
        });
      });
    })
  ]
  

  module.exports = {validationsRegister, validationsLogin}
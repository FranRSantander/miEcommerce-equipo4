const express = require("express");
const fs = require("fs");
const { validationResult } = require("express-validator");

let renderPage = (req, res) => {
  res.render("register");
  console.log(validationResult(req));
};

let registerUser = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    //si hay errores:
    res.render("register", { errors: errors.array(), old: req.body }); //vuelve a cargar esa pagina; manda el array de errores al ejs; manda el contenido de req.body
  } else {
    const arrayUsersObjects = JSON.parse(
      fs.readFileSync("./db/users.json", "utf-8") //lee el json y lo convierte en object
    );
    arrayUsersObjects.push(req.body); //inserta el objeto del request.body
    const jsonArrayUsers = JSON.stringify(arrayUsersObjects); //lo transforma a json
    fs.writeFileSync("./db/users.json", jsonArrayUsers); //lo graba en el json
    res.send("Registro exitoso. Verifique su casilla para validar el mail"); //mensaje de exito
  }
};

let usersController = {
  renderPage: renderPage,
  registerUser: registerUser,
};

module.exports = usersController;

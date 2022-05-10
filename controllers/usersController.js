const fs = require("fs");
const { validationResult } = require("express-validator");
const arrayUsers = require("../db/users.json")

let renderRegister = (req, res) => {
  res.render("register");
};

let registerUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("register", { errors: errors.array(), old: req.body });
  } else {
    arrayUsers.push(req.body);
    const jsonArrayUsers = JSON.stringify(arrayUsers);
    fs.writeFileSync("./db/users.json", jsonArrayUsers);
    res.send("Registro exitoso");
  }
};

let renderLogin = (req, res) => {
  res.render("login");
}

let login = (req, res) => {
  const {email , pass} = req.body;
  const userBuscado = arrayUsers.find((user)=>{
    return user.email === email
  });
  if(userBuscado===undefined){
    res.render("login", {err:"Usuario no Existente"}) 
  }
  res.redirect("/");

}

let usersController = {
  renderRegister: renderRegister,
  registerUser: registerUser,
  renderLogin: renderLogin,
  login: login
};

module.exports = usersController;

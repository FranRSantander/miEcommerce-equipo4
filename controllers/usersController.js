const fs = require("fs");
const { validationResult } = require("express-validator");
const arrayUsers = require("../db/users.json")
//Se implementa alta de usuarios por file system, en vez de api
let renderRegister = (req, res) => {
  res.render("register");
};
let renderLogin = (req, res) => {
  res.render("login");
}
//Funciones para dar de alta usuario y chequear si existe
//Valida si usuario existe, recorre el json.
//reqBody es lo que viene por POST desde el formulario
function userExists(reqBody){
  const {email} = reqBody;      //trae el valor del email del formulario
  let found = arrayUsers.find(element => element.email === email);
  if(found !== undefined) {
    return true
  } else{
    return false;
  }
}
//Validación general
function validateUser(req, res){
  let errors = validationResult(req);
  if (userExists(req.body)) {
    res.render("register", { errors: [{msg: "El usuario ya existe"}], old: req.body }) //manda a la pantalla un objeto errors
    return false;
  }else{
    if(!errors.isEmpty()){
      res.render("register", { errors: errors.array(), old: req.body });
      return false;
    }else{
      return true;
    }
  }
}
//Guarda usuario
function saveUser(reqBody){
  arrayUsers.push(reqBody);
  const jsonArrayUsers = JSON.stringify(arrayUsers);
  fs.writeFileSync("./db/users.json", jsonArrayUsers);
}
//Registra usuario
let registerUser = (req, res)=> {
  if(validateUser(req, res)){
    saveUser(req.body);
    res.send("Registro exitoso");
  }
}
//Logueo
let login = (req, res) => {
  if(!userExists(req.body)){
    res.render("login", {err:"Usuario no Existente"})
  }else{
    res.redirect("/");
  }
}


let usersController = {
  renderRegister: renderRegister,
  registerUser: registerUser,
  renderLogin: renderLogin,
  login: login
};

module.exports = usersController;

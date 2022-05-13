const fs = require("fs");
const { validationResult } = require("express-validator");
const arrayUsers = require("../db/users.json")

let renderRegister = (req, res) => {
  res.render("register");
};

let renderLogin = (req, res) => {
  res.render("login");
}

////////

function saveUser(reqBody){   //debe recibir el objeto req.body
  arrayUsers.push(reqBody);
  const jsonArrayUsers = JSON.stringify(arrayUsers);
  fs.writeFileSync("./db/users.json", jsonArrayUsers);    //lo guarda en users.json
}



let registerUser = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {                   //si hay errores, los manda a la pantalla
    res.render("register", { errors: errors.array(), old: req.body });
  } else {
    saveUser(req.body);
    res.send("Registro exitoso");
  }
};


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

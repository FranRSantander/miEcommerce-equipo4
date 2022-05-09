const arrayUsers = require("../users.json");
const fs = require("fs");

const register = (req, res)=>{
    const user = req.body;

    if(user.email[0] === " " || user.email[user.email.length - 1] === " "){
        res.render("register", {err:"Hay espacios en su registro"}) 
    }

    for(let i = 0; i < arrayUsers.length; i++){
        if(user.email === arrayUsers[0].email){
            res.render("register", {err:"Mail Ya Usado"}) 
            return
        }
        else
        if(user.contrasenia !== user.contraseniaVericada){
            res.render("register", {err:"Verificacion de pass Erronea"}) 
            return
        }
        else
        if(typeof(user.contrasenia) !== Number){
            res.render("register", {err:"La pass debe ser numerica"}) 
            return
        }
    }
    const userEncrip = {email:user.email, pass:"XXXXXX"};
    arrayUsers.push(userEncrip);
    usersJson = JSON.stringify(arrayUsers);
    console.log(user);
    res.render("register", {msj:"Registrado"})
    fs.writeFileSync("./users.json", usersJson);
}

const login = (req, res) =>{
    const {email , pass} = req.body;
    const userBuscado = arrayUsers.find((user)=>{
        return user.email === email
    })
    if(userBuscado===undefined){
        res.render("login", {err:"Usuario no Existente"}) 
    }
    res.redirect("/");//redirect 
}



const controlador ={
    register: register,
    login: login
}

module.exports = controlador;
const res = require('express/lib/response');

const router = require('express').Router();

const fs = require("fs");

const arrayUsers = require("../users.json");

router.get('/register',(req, res)=>{
    res.render('register');
});
///////////////////////////////////////////////////

router.post("/register",(req, res)=>{
    //console.log(req.body);
    const user = req.body;

    if(user.email[0] === " " || user.email[user.email.length - 1] === " "){
        res.render("register", {err:"Hay espacios en su registro"}) 
    }

    for(let i = 0; i < arrayUsers.length; i++){
        if(user.email === arrayUsers[0].email){
            res.render("register", {err:"Mail Ya Usado"}) 
            return
        }
    }
    const userEncrip = {email:user.email, pass:"XXXXXX"};
    arrayUsers.push(userEncrip);
    usersJson = JSON.stringify(arrayUsers);
    console.log(user);
    res.render("register", {msj:"Registrado"})
    fs.writeFileSync("./users.json", usersJson);
    //res.send("Registradito");
    //fs.writeFileSync("./users.json", usersJson);
})
///////////////////////////////////////////////////

router.get('/login',(req, res)=>{
    res.render('login');
});

router.post("/login",(req, res) =>{
    const {email , pass} = req.body;
    const userBuscado = arrayUsers.find((user)=>{
        return user.email === email
    })
    if(userBuscado===undefined){
        res.render("login", {err:"Usuario no Existente"}) 
    }
    res.redirect("/");//redirect 
})

router.get('/checkout',(req, res)=>{
    res.render('checkout');
});

router.get('/cart',(req, res)=>{
    res.render('cart');
});

module.exports = router;
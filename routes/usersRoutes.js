const res = require('express/lib/response');

const router = require('express').Router();

const userControllers = require("../controllers/controllersUsers")

router.get('/register',(req, res)=>{
    res.render('register');
});


router.post("/register", userControllers.register)


router.get('/login',(req, res)=>{
    res.render('login');
});

router.post("/login", userControllers.login)

router.get('/checkout',(req, res)=>{
    res.render('checkout');
});

router.get('/cart',(req, res)=>{
    res.render('cart');
});

module.exports = router;
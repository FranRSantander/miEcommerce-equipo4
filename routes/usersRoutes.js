const router = require('express').Router();

router.get('/register',(req, res)=>{
    res.render('register');
});

router.get('/login',(req, res)=>{
    res.render('login');
});

router.get('/checkout',(req, res)=>{
    res.render('checkout');
});

router.get('/cart',(req, res)=>{
    res.render('cart');
});

module.exports = router;
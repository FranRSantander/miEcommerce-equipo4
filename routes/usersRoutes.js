const router = require('express').Router();

router.get('/register',(req, res)=>{
    res.render('pages/register');
});

router.get('/login',(req, res)=>{
    res.render('pages/login');
});

router.get('/checkout',(req, res)=>{
    res.render('pages/checkout');
});

router.get('/cart',(req, res)=>{
    res.render('pages/cart');
});

module.exports = router;
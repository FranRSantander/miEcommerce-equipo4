const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080
///////////////////////////////////////

app.set('view engine', 'ejs');

app.set('views','./views');

app.use(express.static('public'))
/////////////////////////////////////
app.get('/',(req, res)=>{
    res.render('pages/index')
})

app.get('/products',(req, res)=>{
    res.render('pages/product')
})

app.get('/cart',(req, res)=>{
    res.render('pages/cart')
})

app.get('/checkout',(req, res)=>{
    res.render('pages/checkout')
})
app.get('/register',(req, res)=>{
    res.render('pages/register')
})
app.get('/login',(req, res)=>{
    res.render('pages/login')
})

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
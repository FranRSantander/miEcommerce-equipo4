const express = require('express');

//DEPENDENCIAS

const app = express();
const PORT = process.env.PORT || 8080;

///////////////////////////////////////

const indexRoutes = require('./routes/indexRoutes')
const usersRoutes = require('./routes/usersRoutes')
const productsRoutes = require('./routes/productsRoutes')
const createError = require('http-errors');
///////////////////////////////////////

app.set('view engine', 'ejs');
app.set('views','./views/pages');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/////////////////////////////////////

app.use('/', indexRoutes);
app.use('/users', usersRoutes);
app.use('/product', productsRoutes);

app.use('*', (req,res,next)=>{
    res.status(404).render('404');
    console.log(res.status);
    next();
}) 

///////////////////////////////////////

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// catch 404 and forward to error handler

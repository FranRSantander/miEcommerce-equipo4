const express = require('express');

var createError = require('http-errors');

const app = express();

const PORT = process.env.PORT || 8080;
///////////////////////////////////////
const indexRoutes = require('./routes/indexRoutes')

const usersRoutes = require('./routes/usersRoutes')

const productsRoutes = require('./routes/productsRoutes')
///////////////////////////////////////
app.set('view engine', 'ejs');

app.set('views','./views/pages');

app.use(express.static('public'));
/////////////////////////////////////

app.use('/', indexRoutes);

app.use('/users', usersRoutes);

app.use('/', productsRoutes);
///////////////////////////////////////
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// catch 404 and forward to error handler

app.use(function(req, res, next) {
    next(createError(404));
});
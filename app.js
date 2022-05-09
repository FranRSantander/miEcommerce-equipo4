//DEPENDENCIAS
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

const indexRoutes = require('./routes/indexRoutes')

const usersRoutes = require('./routes/usersRoutes')

const productsRoutes = require('./routes/productsRoutes')

//CONFIGURACION
app.set('view engine', 'ejs');

app.set('views','./views/pages');

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

//RUTAS

app.use('/', indexRoutes);

app.use('/users', usersRoutes);

app.use('/', productsRoutes);

app.get('*',(req, res)=>{
    res.render("404");
});
//* * para todas las rutas*/

///////////////////////////////////////

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
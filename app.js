const express = require('express');

const app = express();
let path = require('path');
const PORT = process.env.PORT || 8080;
///////////////////////////////////////
const indexRoutes = require('./routes/indexRoutes')

const usersRoutes = require('./routes/usersRoutes')

const productsRoutes = require('./routes/productsRoutes')
///////////////////////////////////////
app.set('view engine', 'ejs');

app.set('views','./views');

app.use(express.static(path.join(__dirname, "public")));


/////////////////////////////////////
app.use('/', indexRoutes);

app.use('/users', usersRoutes);

app.use('/', productsRoutes);

///////////////////////////////////////
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
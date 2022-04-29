const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080
///////////////////////////////////////
app.set('view engine', 'ejs');

app.set('views','./views');

app.use(express.static('public'));


app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
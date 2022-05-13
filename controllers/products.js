const fetch = require('node-fetch');
const urlBase = 'https://dhfakestore.herokuapp.com/api';

const getMostWanted = async (req, res) => {

    try {
        const response = await fetch(`${urlBase}/products/mostwanted`);
        const mostwanted = await response.json();
        
        return mostwanted;

    } catch (error) {
        console.log(error);
    }
};

const getSuggested = async (req, res) => {

    try {
        const response = await fetch(`${urlBase}/products/suggested`);
        const suggested = await response.json();

        return suggested;

    } catch (error) {
        console.log(error);
    }
};

// Funcion asincrónica para renderizar en el index los sugeridos y los más pedidos:
const getProducts = (req, res) => {

    Promise.all([getMostWanted(), getSuggested()])
    .then(
        values => {
            let mostwanted = values[0];
            let suggested = values[1];

            res.render('index', {mostwanted, suggested});
        }
    );
}

const getProduct = async (req, res) => {

    const {id} = req.params;
    try {
        const response = await fetch(`${urlBase}/products/`);
        const AllProducts = await response.json();

        // Verifico que el id que llega por params sea un id válido en la lista de productos que tiene la api:
        const product = AllProducts.find(product => product._id == id);
        if(product === undefined){
            res.status(404).render('404product');
        }
        else{
            getSuggested()
            .then(suggested => {
                // Si el producto del que se quiere ver su detalle es uno de los productos sugeridos, lo saco de este arreglo, así no se lo vuelve a sugerir debajo:
                let productIndex = suggested.findIndex(oneProduct => oneProduct._id == product._id);
                if(productIndex > -1 && productIndex < 4){
                    suggested.splice(productIndex, 1);
                }
                
                res.render('product', {suggested, product});
            });
        }
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    getProducts,
    getProduct
};

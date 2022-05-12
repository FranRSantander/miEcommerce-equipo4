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
        const products = await response.json();

        const product = products.find(product => product._id == id);
        if(product === undefined){
            res.status(404).render('404product');
        }
        else{
            Promise.all([getMostWanted(), getSuggested()])
            .then(
                values => {
                    let mostwanted = values[0];
                    let suggested = values[1];
                    
                    res.render('product', {suggested, product});
                }
            );
        }
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    getProducts,
    getProduct
};
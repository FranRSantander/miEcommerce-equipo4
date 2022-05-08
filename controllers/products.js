const fetch = require('node-fetch');
const urlBase = 'https://fakestoreapi.com';


const getAllProducts = (req, res)=>{

    fetch(`${urlBase}/products`)
    .then(response => response.json())
    .then(products => {
        res.render('index', {products});
    })
    .catch(err => console.log(err));
};

const getProduct = async (req, res)=>{

    const {id} = req.params;
    try {
        const response = await fetch(`${urlBase}/products/${id}`);
        const product = await response.json();
        res.render('product', {product});

    } catch (error) {
        console.log(error);
    }

};

module.exports = {
    getAllProducts,
    getProduct
};
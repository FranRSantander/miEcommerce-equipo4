const fetch = require('node-fetch');
const urlBase = 'https://fakestoreapi.com';

const orderByRate = (products)=>{
    products.sort((obj1,obj2)=>{
        if(obj1.rating.rate < obj2.rating.rate){
            return 1;
        }else if(obj1.rating.rate > obj2.rating.rate){
            return -1;
        }else{
            return 0;
        }
    });
};

const orderByCount = (products)=>{
    products.sort((obj1,obj2)=>{
        if(obj1.rating.count < obj2.rating.count){
            return 1;
        }else if(obj1.rating.count > obj2.rating.count){
            return -1;
        }else{
            return 0;
        }
    });
};

const getAllProducts = async (req, res)=>{

    try {
        const response = await fetch(`${urlBase}/products`);
        const products = await response.json();
        const auxiliar = [...products];
        orderByRate(products);
        orderByCount(auxiliar);
        

        res.render('index', {products:products, auxiliar});
    } catch (error) {
        console.log(error);
    }
};

const getProduct = async (req, res)=>{

    const {id} = req.params;
    try {
        const response = await fetch(`${urlBase}/products`);
        const products = await response.json();

        orderByRate(products);
        const product = products.find(product => product.id == id);
        if(product === undefined){
            res.status(501).send('El producto no existe');
        }
        else{
            res.render('product', {products:products, product});
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllProducts,
    getProduct
};


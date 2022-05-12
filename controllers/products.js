// const fetch = require('node-fetch');
// const urlBase = 'https://fakestoreapi.com';

// const orderByRate = (products)=>{
//     products.sort((obj1,obj2)=>{
//         if(obj1.rating.rate < obj2.rating.rate){
//             return 1;
//         }else if(obj1.rating.rate > obj2.rating.rate){
//             return -1;
//         }else{
//             return 0;
//         }
//     });
// };

// const orderByCount = (products)=>{
//     products.sort((obj1,obj2)=>{
//         if(obj1.rating.count < obj2.rating.count){
//             return 1;
//         }else if(obj1.rating.count > obj2.rating.count){
//             return -1;
//         }else{
//             return 0;
//         }
//     });
// };

// const getAllProducts = async (req, res)=>{

//     try {
//         const response = await fetch(`${urlBase}/products`);
//         const products = await response.json();
//         const auxiliar = [...products];
//         orderByRate(products);
//         orderByCount(auxiliar);
        

//         res.render('index', {products:products, auxiliar});
//     } catch (error) {
//         console.log(error);
//     }
// };

// const getProduct = async (req, res)=>{

//     const {id} = req.params;
//     try {
//         const response = await fetch(`${urlBase}/products`);
//         const products = await response.json();

//         orderByRate(products);
//         const product = products.find(product => product.id == id);
//         if(product === undefined){
//             res.status(404).render('404product');
//         }
//         else{
//             res.render('product', {products:products, product});
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };


// module.exports = {
//     getAllProducts,
//     getProduct
// };

//--- esta linea inclusive

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
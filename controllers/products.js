const fetch = require('node-fetch');
const urlBase = 'https://fakestoreapi.com';


const getAllProducts = (req, res)=>{
    fetch(`${urlBase}/products/`)
    .then(response => response.json())
    .then(products => {

        products.sort((obj1,obj2)=>{
            if(obj1.rating.rate < obj2.rating.rate){
                return 1;
            }else if(obj1.rating.rate > obj2.rating.rate){
                return -1;
            }else{
                return 0;
            }
        });
        
        res.render('index', {products});
    })
    .catch(err => console.log(err));
};

const getProduct = async (req, res)=>{
    const {id} = req.params;
    fetch(`${urlBase}/products/${id}`)
    .then(response =>response.json())
    .then(product => {
        console.log(product)
        // product.sort((obj1,obj2)=>{
        //     if(obj1.rating.rate < obj2.rating.rate){
        //         return 1;
        //     }else if(obj1.rating.rate > obj2.rating.rate){
        //         return -1;
        //     }else{
        //         return 0;
        //     }
        // });
        
        res.render('product', {product:product, id});
    })
    .catch(err => console.log(err));
    // try {
    //     const response = await fetch(`${urlBase}/products/${id}`);
    //     const product = await response.json();
    //     res.render('product', {product});

    // } catch (error) {
    //     console.log(error);
    // }

};

module.exports = {
    getAllProducts,
    getProduct
};


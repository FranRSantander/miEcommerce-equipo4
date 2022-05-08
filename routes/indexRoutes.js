const router = require('express').Router();
const { getAllProducts, getProduct } = require('../controllers/products');


router.get('/', getAllProducts);
router.get('/product/:id', getProduct);
router.get('/products',(req, res)=>{
    res.render('product');
});

module.exports = router;

// const router = require('express').Router();

// router.get('/',(req, res)=>{
//     res.render('index');
// });

// module.exports = router;
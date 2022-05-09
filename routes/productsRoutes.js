const router = require('express').Router();
const { getProduct } = require('../controllers/products');


router.get('/:id', getProduct);

module.exports = router;
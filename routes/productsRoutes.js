const router = require('express').Router();

router.get('/products',(req, res)=>{
    res.render('pages/product');
});



module.exports = router;
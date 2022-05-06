const router = require('express').Router();

router.get('/products',(req, res)=>{
    res.render('product');
});



module.exports = router;
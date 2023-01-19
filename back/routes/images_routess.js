const express = require('express')
const router = express.Router();
const ImagesController = require('../controller/images.controller')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', ImagesController.getAllHouse);
router.post('/', ImagesController.addHouse);
router.get('/:id', ImagesController.getById);
router.put('/:id', ImagesController.updateHouse);
router.delete('/:id', ImagesController.deleteHouse);
router.get('/product/:id', ImagesController.getSingleProduct);


module.exports=router;
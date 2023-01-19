const express = require('express')
const router = express.Router();
const MarkalarRoutes = require('../controller/Markalar_controller.js')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', MarkalarRoutes.getAllHouse);
router.post('/', MarkalarRoutes.addHouse);
router.get('/:id', MarkalarRoutes.getById);
router.put('/:id', MarkalarRoutes.updateHouse);
router.delete('/:id', MarkalarRoutes.deleteHouse);
router.get('/product/:id', MarkalarRoutes.getSingleProduct);


module.exports=router;
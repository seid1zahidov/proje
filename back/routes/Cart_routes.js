const express = require('express')
const router = express.Router();
const Cart_controller = require('../controller/Cart_controller')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', Cart_controller.getAllHouse);
router.post('/', Cart_controller.addHouse);
router.get('/:id', Cart_controller.getById);
router.put('/:id', Cart_controller.updateHouse);
router.delete('/:id', Cart_controller.deleteHouse);
router.get('/product/:id', Cart_controller.getSingleProduct);


module.exports=router;
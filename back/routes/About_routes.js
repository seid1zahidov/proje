const express = require('express')
const router = express.Router();
const Aboutcontroller = require('../controller/About_controller.js')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', Aboutcontroller.getAllHouse);
router.post('/', Aboutcontroller.addHouse);
router.get('/:id', Aboutcontroller.getById);
router.put('/:id', Aboutcontroller.updateHouse);
router.delete('/:id', Aboutcontroller.deleteHouse);
router.get('/product/:id', Aboutcontroller.getSingleProduct);


module.exports=router;
const express = require('express')
const router = express.Router();
const Housecontroller = require('../controller/Custom_home')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', Housecontroller.getAllHouse);
router.post('/', Housecontroller.addHouse);
router.get('/:id', Housecontroller.getById);
router.put('/:id', Housecontroller.updateHouse);
router.delete('/:id', Housecontroller.deleteHouse);
router.get('/product/:id', Housecontroller.getSingleProduct);


module.exports=router;
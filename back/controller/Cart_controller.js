const Cart = require('../models/Cart_models')


const getAllHouse = async (req,res,next) => {
    let cart;
    try {
        cart = await Cart.find();
    } catch (error) {
        console.log(error);
    }
    if(!cart) {
        return res.status(404).json({message: 'No Cart yet...!'})
    }
    else{
        return res.status(200).json({cart})
    }
}

const addHouse = async (req,res,next) => {
    const {name,price,image,rate} = req.body;
    let cart;
    try {
        cart = new Cart({
            name,
            price,
            image , 
            rate
        })
        await cart.save();
    } catch (error) {
        console.log(err);
    }
    if(!cart) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({cart})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let cart;
    try {
        cart = await Cart.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!cart) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({cart})
    }
}
const updateHouse = async (req,res,next) => {
    const id = req.params.id;
    const {name,price,image,rate} = req.body;
    let cart;
    try {
        cart = await Cart.findByIdAndUpdate(id, {
            name,
            price,
            image,
            rate
        })
        cart = await cart.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!cart) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({cart})
  }
}
const deleteHouse = async (req,res,next) => {
  const id = req.params.id;
  let cart;
  try {
    cart = await Cart.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!cart) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({cart})
  }
}

const getSingleProduct=async(req,res,next)=>{
    const id = req.params.id;
    let cart;
    try {
        cart = await cart.findById(id)
      res.send(cart)
    } 
    catch (error) {
        console.log(err);
    }
   
}

exports.getAllHouse = getAllHouse;
exports.addHouse = addHouse;
exports.getById = getById;
exports.updateHouse = updateHouse;
exports.deleteHouse = deleteHouse;
exports.getSingleProduct=getSingleProduct;
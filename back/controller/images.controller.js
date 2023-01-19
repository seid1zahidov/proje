const Images = require('../models/images.models')


const getAllHouse = async (req,res,next) => {
    let images;
    try {
        images = await Images.find();
    } catch (error) {
        console.log(error);
    }
    if(!images) {
        return res.status(404).json({message: 'No images yet...!'})
    }
    else{
        return res.status(200).json({images})
    }
}

const addHouse = async (req,res,next) => {
    const {name,price,image,rate} = req.body;
    let images;
    try {
        images = new Images({
            name,
            price,
            image , 
            rate
        })
        await images.save();
    } catch (error) {
        console.log(err);
    }
    if(!images) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({images})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let images;
    try {
        images = await Images.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!images) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({images})
    }
}
const updateHouse = async (req,res,next) => {
    const id = req.params.id;
    const {name,price,image,rate} = req.body;
    let images;
    try {
        images = await Images.findByIdAndUpdate(id, {
            name,
            price,
            image,
            rate
        })
        images = await images.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!images) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({images})
  }
}
const deleteHouse = async (req,res,next) => {
  const id = req.params.id;
  let images;
  try {
    images = await Images.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!images) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({images})
  }
}

const getSingleProduct=async(req,res,next)=>{
    const id = req.params.id;
    let images;
    try {
        images = await images.findById(id)
      res.send(images)
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
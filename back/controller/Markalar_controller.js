const Marka = require('../models/Markalar_controller.js')


const getAllHouse = async (req,res,next) => {
    let marka;
    try {
        marka = await Marka.find();
    } catch (error) {
        console.log(error);
    }
    if(!marka) {
        return res.status(404).json({message: 'No marka yet...!'})
    }
    else{
        return res.status(200).json({marka})
    }
}

const addHouse = async (req,res,next) => {
    const {name,price,image,rate} = req.body;
    let marka;
    try {
        marka = new Marka({
            name,
            price,
            image , 
            rate
        })
        await marka.save();
    } catch (error) {
        console.log(err);
    }
    if(!marka) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({marka})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let marka;
    try {
        marka = await Marka.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!marka) {
        return res.status(404).json({message: 'No marka  id!'})
    }
    else{
        return res.status(200).json({marka})
    }
}
const updateHouse = async (req,res,next) => {
    const id = req.params.id;
    const {name,price,image,rate} = req.body;
    let marka;
    try {
        marka = await Marka.findByIdAndUpdate(id, {
            name,
            price,
            image,
            rate
        })
        marka = await marka.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!marka) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({marka})
  }
}
const deleteHouse = async (req,res,next) => {
  const id = req.params.id;
  let marka;
  try {
    marka = await Marka.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!marka) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({marka})
  }
}

const getSingleProduct=async(req,res,next)=>{
    const id = req.params.id;
    let marka;
    try {
        marka = await marka.findById(id)
      res.send(marka)
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
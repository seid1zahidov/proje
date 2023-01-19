const House2 = require('../models/constrocture_House-Secont')


const getAllHouse = async (req,res,next) => {
    let house;
    try {
        house = await House2.find();
    } catch (error) {
        console.log(error);
    }
    if(!house) {
        return res.status(404).json({message: 'No house yet...!'})
    }
    else{
        return res.status(200).json({house})
    }
}

const addHouse = async (req,res,next) => {
    const {name,price,image,rate} = req.body;
    let house;
    try {
        house = new House2({
            name,
            price,
            image , 
            rate
        })
        await house.save();
    } catch (error) {
        console.log(err);
    }
    if(!house) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({house})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let house;
    try {
        house = await House2.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!house) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({house})
    }
}
const updateHouse = async (req,res,next) => {
    const id = req.params.id;
    const {name,price,image,rate} = req.body;
    let house;
    try {
        house = await House2.findByIdAndUpdate(id, {
            name,
            price,
            image,
            rate
        })
        house = await house.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!house) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({house})
  }
}
const deleteHouse = async (req,res,next) => {
  const id = req.params.id;
  let house;
  try {
    house = await House2.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!house) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({house})
  }
}

const getSingleProduct=async(req,res,next)=>{
    const id = req.params.id;
    let house;
    try {
        house = await house.findById(id)
      res.send(house)
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
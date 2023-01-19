const About = require('../models/About_models.js')


const getAllHouse = async (req,res,next) => {
    let about;
    try {
        about = await About.find();
    } catch (error) {
        console.log(error);
    }
    if(!about) {
        return res.status(404).json({message: 'No about yet...!'})
    }
    else{
        return res.status(200).json({about})
    }
}

const addHouse = async (req,res,next) => {
    const {name,price,image,rate} = req.body;
    let about;
    try {
        about = new About({
            name,
            price,
            image , 
            rate
        })
        await about.save();
    } catch (error) {
        console.log(err);
    }
    if(!about) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({about})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let about;
    try {
        about = await About.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!about) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({about})
    }
}
const updateHouse = async (req,res,next) => {
    const id = req.params.id;
    const {name,price,image,rate} = req.body;
    let about;
    try {
        about = await About.findByIdAndUpdate(id, {
            name,
            price,
            image,
            rate
        })
        about = await about.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!about) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({about})
  }
}
const deleteHouse = async (req,res,next) => {
  const id = req.params.id;
  let about;
  try {
    about = await About.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!about) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({about})
  }
}

const getSingleProduct=async(req,res,next)=>{
    const id = req.params.id;
    let about;
    try {
        about = await about.findById(id)
      res.send(about)
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
const House = require("../models/house.model");


const getHouses =async(req,res)=>{
    try{
        const houses = await House.find({});
        res.status(200).json(houses);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

const getHouse = async(req,res)=>{
    try{
        const {id}=req.params;
        const house= await House.find({id});
        res.status(200).json(house);
    }catch(error){
        res.status(500).json({message : error.message });
    }
}
const createHouse = async(req,res)=>{
    try{
        const house = await House.create(req.body);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message : error.message});
    }
}


const updateHouse = async(req,res)=>{
    try {
        const { id } = req.params;
        const house =await House.findByIdAndUpdate(id,req.body);
        if(!house){
            return res.status(404).json({message : e})
        }
        const updatedHouse =await House.findById(id);
        res.status(200).json(updatedHouse);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}



const deleteHouse = async(req,res)=>{
    try {
        const { id } = req.params;
        const house = await House.findByIdAndDelete(id);
        if(!house){
            res.status(404).json({message: error.message});
        }
        res.status(200).json({ message: "Product not found"});
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
}

module.exports={
    getHouses,
    getHouse,
    createHouse,
    updateHouse,
    deleteHouse
}
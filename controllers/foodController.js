const Food = require('../models/Food');

// add food
const addFood = async(req,res)=>{
    try{
        const {name, category, price, description, image} = req.body;
        if(!name || !category || !price){
            return res.status(400).json({message:"Name, Category and Price fields are required"});
        }

        const food = await Food.create({
            name,
            category,
            price,
            description,
            image
        });

        res.status(201).json({
            message:"Food added successfully",
            food,
        });
    }
    catch(error){
        console.error("Error adding food "+error);
        res.status(500).json({message:"Error adding food"});
    }
}

// get all foods
const getAllFoods = async(req,res)=>{
    try{
        const foods = await Food.find();
        res.json(foods);
    }
    catch(error){
        console.error("Error getting all foods "+error);
        res.status(500).json({message:"Error getting all foods"});
    }
}

// get food by id
const getFoodById = async(req,res)=>{
    try{
        const food = await Food.findById(req.params.id);
        if(!food){
            return res.status(404).json({message:"Food not found"});
        }
        res.json(food);
    }
    catch(error){
        console.error("Error getting food by id "+error);
        res.status(500).json({message:"Error getting food by id"});
    }
}

// get foods by category filtering
const getFoodsByCategory = async(req,res)=>{
    try{
        const { category } = req.params;
        const foods = await Food.find({category: category.toLowerCase()});

        if(foods.length === 0){
            return res.status(404).json({message:"No foods found for this category"});
        }

        res.json(foods);
    }
    catch(error){   
        console.error("Error getting foods by category "+error);
        res.status(500).json({message:"Error getting foods by category"});
    }
}

// update food
const updateFood = async(req,res)=>{
    try{
        const food = await Food.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!food){
            return res.status(404).json({message:"Food not found"});
        }
        res.json({
            message:"Food updated successfully",
            food
        });
    }
    catch(error){
        console.error("Error updating food "+error);
        res.status(500).json({message:"Error updating food"});
    }
}

// Delete food
const deleteFood = async(req,res)=>{
    try{
        const food = await Food.findByIdAndDelete(req.params.id);
        if(!food){
            return res.status(404).json({message:"Food not found"});
        }
        res.json({
            message:"Food deleted successfully",
            food
        });
    }
    catch(error){
        console.error("Error deleting food "+error);
        res.status(500).json({message:"Error deleting food"});
    }
}

module.exports = {
    addFood,
    getAllFoods,
    getFoodById,
    getFoodsByCategory,
    updateFood,
    deleteFood
}
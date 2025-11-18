const RestaurantModel = require("../models/Restaurant.model");
//CREATE
async function createRestaurant(req,res){
    try{
        const {name,imageUrl,rating,cuisines,deliveryTime} = req.body;
        const newRestaurant = await RestaurantModel.create({name,imageUrl,rating,cuisines,deliveryTime}) //returs promise
        return res.status(201).json({"new Restaurant": newRestaurant})
    }
    catch(err){
        return res.status(500).json({"error while creating Restaurant": err})
    }
}
// READ
async function fetchRestaurant(req,res){
    try{
        const dataRestaurant = await RestaurantModel.find({}) //returs promise
        if(!dataRestaurant){
            return res.status(404).json({"message": "restaurants are not found"})
        }
        return res.status(200).json(dataRestaurant)
    }
    catch(err){
        return res.status(500).json({"error while fetching Restaurants": err})
    }
}
// UPDATE
async function updateRestaurant(req,res){
    try{
        const {id} = req.params;
        const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(updatedRestaurant)
    }
    catch(err){
        return res.status(500).json({"error while updating Restaurants": err})
    }
}
// DELETE
async function deleteRestaurant(req,res){
    try{
        const {id} = req.params;
        const deletedRestaurant = await RestaurantModel.findByIdAndDelete(id)
        res.status(200).json(deletedRestaurant)
    }
    catch(err){
        return res.status(500).json({"error while updating Restaurants": err})
    }
}

module.exports = {createRestaurant, fetchRestaurant,updateRestaurant,deleteRestaurant}

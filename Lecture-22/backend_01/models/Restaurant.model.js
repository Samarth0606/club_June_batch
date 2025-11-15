
const mongoose = require('mongoose')

// schema
const retaurantSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    rating: String,
    cuisines: String,
    deliveryTime: String
});

// model
const RestaurantModel = mongoose.model('Restaurant', retaurantSchema);

// export
module.exports = RestaurantModel;

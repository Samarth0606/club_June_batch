const { createRestaurant, fetchRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurant.controller');

function restaurantRoutes(app){
    app.post('/api/restaurant' , createRestaurant);
    app.get('/api/restaurants' , fetchRestaurant);
    app.patch('/api/restaurant/:id' , updateRestaurant);
    app.delete('/api/restaurant/:id' , deleteRestaurant);
}

module.exports = restaurantRoutes
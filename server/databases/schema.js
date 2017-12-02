const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/eat-list');
mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB ORM - mongodb-orm');
});

const FoodSchema = new Schema({
    placesId: String,
    name: String,
    rating: Number,
    types: Array,
    address: Date,
});

const FoodList = mongoose.model('FoodList', FoodSchema);

module.exports = FoodList;
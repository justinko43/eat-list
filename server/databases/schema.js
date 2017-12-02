const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/eat-list');

const FoodSchema = new Schema({
    placesId: String,
    name: String,
    rating: Number,
    types: Array,
    address: String,
});

const FoodList = mongoose.model('FoodList', FoodSchema);

// let firstList = new FoodList({
//     placesId: 'here',
//     name: 'my awesome restaurant',
//     rating: 9,
//     types: ['awesome', 'great'],
//     address: '4555 west 4th street',
// });

// mongoose.connection.once('open', () => {
//     console.log('Connected with MongoDB ORM - mongodb-orm');
// });


module.exports = FoodList;
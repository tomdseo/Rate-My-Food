const mongoose = require('mongoose');

const RatingsSchema = new mongoose.Schema({
    value: {type: Number, required: true},
    comment: {type: String, required: true},
}, {timestamps: true });

const RatingsModel = mongoose.model('RatingDocument', RatingsSchema);

const FoodSchema = new mongoose.Schema({ //!!Schema in Mongoose is a structure for each Document
    name: {type: String, required: true, unique: true},
    image: {type: String, required: true, unique: true},
    ratings: {type: [RatingsSchema]},
}, {timestamps: true }); //.....................adds "createdAt" and "updatedAt" properties to TaskDocument(s)

const FoodModel = mongoose.model('FoodDocument', FoodSchema);
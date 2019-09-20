const mongoose = require('mongoose');
const RatingsModel = mongoose.model('RatingDocument');
const FoodModel = mongoose.model('FoodDocument');

module.exports = {
    getAllFood(req, res) {
    // FoodModel.remove({}, ()=> console.log('empty')); //remove all Data from Collection
    FoodModel.find()
        .then(data => res.json(data))
    },

    getAllRatings(req, res) {
        RatingsModel.find()
            .then(data => res.json(data));
    },

    getFood(req, res) {
        FoodModel.find({_id: req.params.id})
            .then(data => res.json(data))
    },

    createFood(req, res) {
        const Food = new FoodModel();
        Food.name = req.body.name;
        Food.image = req.body.image;
        Food.save()
            .then(res.redirect('/food'));
    },

    updateFood(req, res) {
        const Rating = new RatingsModel();
        Rating.value = req.body.value;
        Rating.comment = req.body.comment;
        Rating.save()
            .then(data => FoodModel.updateOne({_id: req.params.id}, {$push: {ratings: data}}, {runValidators: true}))
    },

    deleteFood(req, res) {
        FoodModel.deleteOne({_id: req.params.id})
            .then(res.redirect('/food'));
    },

    deleteAllFood(req, res) {
        FoodModel.deleteMany()
            .then(res.redirect('/food'));
    },

    deleteAllRatings(req, res) {
        RatingsModel.deleteMany()
            .then(res.redirect('/food'));
    }

};
const foodController = require('../controllers/foodController');

module.exports = function (app) {
    app.get('/food', foodController.getAllFood);

    app.get('/ratings', foodController.getAllRatings);

    app.get('/food/:id', foodController.getFood);

    app.post('/food', foodController.createFood);

    app.put('/food/:id', foodController.updateFood);

    app.delete('/food/:id', foodController.deleteFood);

    //delete all food or ratings
    app.delete('/food', foodController.deleteAllFood);

    app.delete('/ratings', foodController.deleteAllRatings)

}
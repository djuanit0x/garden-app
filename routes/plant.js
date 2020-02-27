/*
 * GET home page.
 */

var data = require("../data.json");

exports.view = function(req, res) {
    let plantId = null;

    if (req.params.id) {
        plantId = req.params.id;
    }

    res.render(
        "plant",
        data.DB.find(plant => plant.id === plantId) // finding the plant based on their assigned unique id
    );
};


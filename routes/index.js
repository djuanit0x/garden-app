/*
 * GET home page.
 */

var data = require("../data.json");

exports.view = function(req, res) {
    res.render("index", data);
};

/*
 * Add plant to DB.
 */

exports.addPlant = function(req, res) {
    try {
        if (req.body) {
            const plantIdToFind = req.body.plantId;
            // finding the plant based on their assigned unique id
            const plantToAdd = data.DB.find(plant => plant.id === plantIdToFind);

            data.plants.push(plantToAdd);

        } else {
            console.error("No Body in the'req'");
        }
    } catch (err) {
        console.error(err);
    }
};

/*
 * Add plant to DB.
 */

exports.deletePlant = function(req, res) {
    try {
        if (req.body) {
            const plantIdToFind = req.body.plantId;
            // finding the plant based on their assigned unique id
            const idxPlantToDelete = data.plants.findIndex(plant => plant.id === plantIdToFind);

            data.plants.splice(idxPlantToDelete, 1);

        } else {
            console.error("No Body in the'req'");
        }
    } catch (err) {
        console.error(err);
    }
};

/*
 * GET Calendar page.
 */

var data = require("../data.json");

exports.view = function(req, res) {
    let allSchedules = [];

    for (let idx = 0; idx < data.plants.length; idx++) {
        let plantName = data.plants[idx].name;
        let schedules = data.plants[idx].schedules;
        let color = data.plants[idx].color;

        allSchedules.push({
            plantName,
            schedules,
            color
        });
    }
    let schedulesObj = {};
    schedulesObj.allSchedules = allSchedules;

    res.render("calendar", schedulesObj);
};

exports.update = function(req, res) {
    if (req.body) {
        const plantIdToFind = req.body.plantId;
        const day = req.body.day;

        // finding the plant based on their assigned unique id

        for (let idx = 0; idx < data.plants.length; idx++) {
            if (data.plants[idx].id === plantIdToFind) {
                if (!data.plants[idx].schedules.days.includes(day)) {
                    data.plants[idx].schedules.days.push(day);
                    console.log("Add day to the schedule!");
                } else {
                    const idxDayToDelete = data.plants[idx].schedules.days.findIndex(el => el === day);

                    data.plants[idx].schedules.days.splice(idxDayToDelete, 1);
                    console.log("Delete a day from the schedule!");
                }
            }
        }
    } else {
        console.error("No Body in the'req'");
    }
};

/*
 * GET Calendar page.
 */

var data = require("../data.json");

exports.view = function(req, res) {
    let allSchedules = [];

    for (let idx = 0; idx < data.plants.length; idx++) {
        let plantName = data.plants[idx].name;
        let schedules = data.plants[idx].schedules;

        allSchedules.push({
            plantName,
            schedules
        });
    }
    let schedulesObj = {};
    schedulesObj.allSchedules = allSchedules;

    console.dir(schedulesObj)
    res.render("calendar", schedulesObj);
};

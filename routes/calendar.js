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

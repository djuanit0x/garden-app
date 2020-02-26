/**
 * Module dependencies.
 */

var express = require("express");
var http = require("http");
var path = require("path");
var handlebars = require("express3-handlebars");

// routes
var index = require("./routes/index.js");
var DB = require("./routes/DB.js");
var plant = require("./routes/plant.js");
var calendar = require("./routes/calendar.js");
var login = require("./routes/login.js");
var app = express();

// all environments
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser("IxD secret key"));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));

// development only
if ("development" == app.get("env")) {
    app.use(express.errorHandler());
}

app.get("/", index.view);
app.get("/DB", DB.view);


app.get("/calendar", calendar.view);
app.get("/login", login.view);

app.get("/plant/:id", plant.view);
app.post("/add", index.addPlant);
app.post("/delete", index.deletePlant);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get("port"), function() {
    console.log("Express server listening on port " + app.get("port"));
});

// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


//TODO: db schema here
var articles_controller = require("./controllers/controller");
var Article = require("./models/Article");


// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

mongoose.connect("mongodb://heroku_jl5lxgf9:r5in3ssp80igqrdlioeq7ltmb5@ds153400.mlab.com:53400/heroku_jl5lxgf9");
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/articles", function(req, res) {
    Article.find({}).sort([
        ["date", "descending"]
    ]).limit(5).exec(function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    });
});

app.delete("/api/articles/:id", function(req, res){
    var query = {};
    query._id = req.params.id;
    articles_controller.delete(query, function(err, data){
        res.json(data);
    })
})

app.post("/api/articles", function(req, res){
    articles_controller.save(req.body, function(err, data){
        res.json(data);
    });
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

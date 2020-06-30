var express = require("express");
var app = express();
app.get("/", function (req, res) {

 res.send("test branch created from master");

});
app.listen(process.env.PORT || 3000);
 
module.exports = app;


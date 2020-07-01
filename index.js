var express = require("express");
var app = express();
app.get("/", function (req, res) {

 res.send("test2 branch created from test1 branch for testing purpose");

});
app.listen(process.env.PORT || 3000);
 
module.exports = app;


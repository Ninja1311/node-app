var express = require("express");
var app = express();
app.get("/", function (req, res) {

 res.send("hello Jenkins world. This is web5");

});
app.listen(process.env.PORT || 3000);
 
module.exports = app;


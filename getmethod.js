
var express = require('express');
var app = express();
const bodyParser = require("body-parser");

app.get('/process_get', function (req, res) {
   res.send('Get Request Called');
  express.response = {
   firstname : req.query.first_name,
   lastname : req.query.last_name
  };
  console.log(res);
  res.end(JSON.stringify(express.response));
})



var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})
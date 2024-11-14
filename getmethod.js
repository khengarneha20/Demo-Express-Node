
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')

app.get('/process_get', function (req, res) {
   res.send('Get Request Called');
})

app.use(express.json());

app.post('/process_post', function (req, res) {
 //  res.send('Post request called ');
 const { name } = req.body; 
   res.json({
      success :true,
      message : `Welcome back ${name}`
   });

});



var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})
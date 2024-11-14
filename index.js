var express = require('express');
var app = express();
const bodyParser = require("body-parser");



app.use([
    bodyParser.json({ limit: "100mb", extended: false }),
    bodyParser.urlencoded({ limit: "100mb", extended: false })]
   );


app.get('/', function (req, res) {
   res.send('Hello World. how are u ?');
})

app.post('/test', function (req, res) {
    console.log(req.body);
    const data = req.body;
    const { name, id } = data;
    let message = "";
    if (name === "neha" && Number(id) === 1) {
        message = "yes you are neha.." 
    }
    res.status(200).json({ message, ...req.body });  // combine 1 json to another json 
 })

var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})

var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')

// Get method--------------------->>

app.get('/process_get', function (req, res) {
   res.send('Get Request Called');
})

app.use(express.json());
app.use(morgan("dev"));

// Post method--------------------->>

app.post('/process_post', function (req, res) {
 //  res.send('Post request called ');
 const { name } = req.body; 
   res.json({
      success :true,
      message : `Welcome back ${name}`
   });

});

// Put Method --------------------------->> 

// data in postman {
//    "id" : 4,
//    "name" : "neha khengar",
//    "mno" : 9099193215,
//    "add" : "rajkot"
//    } 
app.put('/process_put', function (req, res){

   const data = req.body;
   const {id ,name, mno , add} = data;

   if (id === 1){

   res.json({
      success : true,
      message : "This is Example of put api",
      message : `The  ${id} is , name is ${name} , Phone no is ${mno} , address is ${add} `

   });
}

else {
   res.status(404).json({
      success: false,
      message: `User with ID ${id} not found`
    });
}

});

// Delete method ----------->>

app.delete('/delete', function(req,res){

   const data = req.body;
   const {id ,name, mno , add} = data;

   if (id === 1){

      res.json({
         success : true,
         message : "This is Example of delete api",
         message : `The user with this id ${id} is deleted successfully` 
   
      }); 
   }


})





var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})
//loading env
const path = require('path');
if (process.env.NODE_ENV != 'production') {
    require("dotenv").config();
}; 

//imports
const express = require('express');
const cors = require('cors');
const dbconnection = require('./config/dbconnection');
// this is for cloud setup on Render
//const frontendBuildPath = path.join(__dirname, '../carpenterFrontEnd/build');
// ex how to connect controllers
//const studentsController = require('./controllers/studentsController');

//App
const app = express();

//connect to MONGODB
// TODO: update uri connection strings
dbconnection();

//Configure express app
app.use(express.json()); 
app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.static(frontendBuildPath));
//Routes

// ex controller setup
// app.get('/admin/staff', adminController.getAllStaff);

//Server start
app.listen(process.env.PORT , function (){
    console.log('Listening on port:'+process.env.PORT);
});
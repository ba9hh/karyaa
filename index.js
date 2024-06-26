const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const app = express()
const houseRoute = require("./routes/house.route.js");


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use("/api/houses",houseRoute);

app.listen(3000,()=>{
    console.log('server is running');
});
mongoose.connect("mongodb+srv://ezdin:test123@karya.efcifes.mongodb.net/House?retryWrites=true&w=majority&appName=karya")
  .then(() => console.log('Connected!'))
  .catch(()=>console.log('error'));

app.get('/',(req,res)=>{
    const id = req.query.id;

  if (id) {
    // If 'id' parameter is present, serve 'house.detail.html'
    res.sendFile(path.join(__dirname, 'views', 'house.detail.html'));
  } else {
    // Otherwise, serve 'index.html'
    res.sendFile(path.join(__dirname, 'index.html'));
  }

});

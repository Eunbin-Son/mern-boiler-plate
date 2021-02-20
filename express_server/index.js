const express = require("express");
const app = express();

const config = require("./config/dev");

const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        dbName: "DB0"
    })
        .then(() => console.log('MongoDB Atlas survey program cluster0 is connected..'))
        .catch(err => console.log('MongoDB Atlas is not connected, err ocuured : '+err));

const port = 5001;


app.listen(port, ()=> {
    console.log(`Express_Server is now running at port ${port}`);
});
const express = require("express");
const app = express();
const chalk = require('chalk');

const bodyParser = require("body-parser"); //요청을 분석하여 가져옴

const { User } = require("./models/User");

// 설정
const config = require("./config/dev");

// 미들웨어 설정
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//db연결
const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        dbName: "DB0"
    })
        .then(() => console.log(chalk.greenBright('MongoDB Atlas connected successfully : cluster0')))
        .catch(err => console.log(chalk.redBright('MongoDB Atlas is not connected, err ocuured : '+err)));


//요청 라우팅
app.get("/", (req, res) => res.send('This is the landing page.'));

app.post("/resister", (req, res) => {
    const user = new User(req.body);
    user.save((err, userinfo) => {
        if(err) return res.json({success: false})
        return res.status(200).json({success: true});
    })
})

//리슨
const port = 5001;
app.listen(port, ()=> {
    console.log(chalk.cyanBright(`Express Server is running at port ${port}`));
});
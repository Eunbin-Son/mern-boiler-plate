const express = require("express");
const app = express();
const chalk = require('chalk');
const bodyParser = require("body-parser"); //요청을 분석하여 가져옴
const { User } = require("./models/User");
const cookieParser = require("cookie-parser")
const {auth} = require("./middleware/auth");

// 설정
const config = require("./config/dev");

// 미들웨어 설정
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

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

app.post("/api/users/register", (req, res) => {
    const user = new User(req.body);
    user.save((err, userinfo) => {
        if(err) return res.send('register failed'+err)
        return res.status(200).json({registerSuccess: true});
    })
})

app.post("/api/users/login", (req, res) => {
    User.findOne({ user_email: req.body.user_email}, (err, user) => {
        if(!user)
            return res.json({
                loginSuccess: false,
                message: "The email doesn't exist"
            });

            user.comparePW(req.body.password, (err, isMatch) => {
                if(!isMatch)
                    return res.json({ 
                        loginSuccess: false,
                        message: "The password doesn't matched" 
                    });

                    user.generateJWT((err, user) => {
                        if(err) return res.status(400).send(err);

                        res.cookie("jwt", user.token).status(200).json({
                            loginSuccess: true, 
                            userID: user._id
                        });
                    })
            })
    })
})


app.get("/auth", auth, (req, res) => {

    res.status(200).json({
        _id: req.user._id,
        idAdmin: req.user.role === "user" ? false : true,
        isAuth: true,
        user_email: req.user.user_email,
        user_name: req.user.user_name,
        role: req.user.role,
        image: req.user.image
    })
})

app.get("/logout", auth, (req, res) => {

    User.findOneAndUpdate({_id: req.user._id}, {token: ""},  (err, user) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).send({
            success: true
        })
    })

})

//리슨
const port = 5001;
app.listen(port, ()=> {
    console.log(chalk.cyanBright(`Express Server is running at port ${port}`));
});
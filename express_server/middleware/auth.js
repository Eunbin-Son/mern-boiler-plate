const {User} = require('../models/User');


let auth = (req, res, next) => {

    let token = req.cookie.jwt;

    User.findByToken(token, (err, userFinded) => {
        if(err) {throw err; return res.status(400).send('The err occured, auth Failed'+err);}
        if(!userFinded) return res.send('The user could not finded').json({ isAuth: false, error: true})

    })


}

module.exports = {auth};
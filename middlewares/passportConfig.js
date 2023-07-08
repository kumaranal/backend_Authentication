


const { error } = require("shelljs");
const User = require("../models/loginModel")
const passport = require('passport');

require('dotenv').config();
const JWTCODE = process.env.JWTCODE;

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = JWTCODE;
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    if(jwt_payload.result==null){
        console.log(error)
    }
    User.find({ _id: jwt_payload.result._id })
    .then(user=>{
        return done(null, user);
    })
    .catch(error =>
        console.log(error)
    )
}

));

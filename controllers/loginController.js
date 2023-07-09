const User = require("../models/loginModel")
const jwtfn = require("../middlewares/jwtauthcode");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var validator = require("email-validator");
const crypto = require("crypto")
const { TokenExpiredError } = require("jsonwebtoken");
const passport = require("passport")
const express = require("express");
const app = express();

require('dotenv').config();

const JWTCODE = process.env.JWTCODE;



const registrationfn = async (req, res) => {
    console.log("req", req.body)
    try {
        const value = validator.validate(req.body.email);
        if (!value) {
            return res.status(400).json({ msg: "Fail", data: "EMAIL is INVALID" });
        }
        let userexist = await User.findOne({ email: req.body.email });
        if (userexist) {
            return res.status(400).json({ msg: "Fail", data: "Email already exist" });
        }


        /////// main registration fn ////////
        User.create(req.body)
            .then(result => {
                {
                    return res.status(200).json({ msg: "Success", data: result });
                }
            })
            .catch(err => {
                console.log(err);
                return res.status(400).json({ msg: "Fail" });

            })


        ////////
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "failes due to error occure" });
    }

}


const login1fn = async (req, res, next) => {
    try {
        const value = validator.validate(req.body.email);
        if (!value) {
            return res.status(400).json({ msg: "Fail", data: "EMAIL is INVALID" });
        }
        //////
        let result = await User.findOne({ email: req.body.email });
        if (result == null) {
            res.status(200).json({ msg: "Fail", data: "invalid login credentials" });

        }
        else {
            let isMatch = await bcrypt.compare(req.body.password, result.password);
            if (isMatch) {
                const data = {
                    result: {
                        _id: result._id
                    }
                }
                const authtoken = jwt.sign(data, JWTCODE, { expiresIn: "1h" }); ///expire in 1 hour
                // const authtoken = jwt.sign(data, JWTCODE); 
                res.status(200).json({ msg: "Success", token: `Bearer ${authtoken}`,username: req.body.name });

            }
            else {
                res.status(400).json({ msg: "Fail", data: "invalid login credentials" });

            }
        }

    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ msg: "failes due to error occure" });
    }

}

module.exports = { login1fn, registrationfn };
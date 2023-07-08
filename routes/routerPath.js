const express=require("express");
const {getallfn,getspecificfn,createfn,updatefn,deletefn,locationsearch} = require('../controllers/taskController');
const {login1fn,registrationfn}= require('../controllers/loginController')
const bycriptfn=require('../middlewares/bycript');
const profileDetailsfn=require('../middlewares/profiledetails')
const jwtfn = require("../middlewares/jwtauthcode");
const router=express.Router()
var passport=require('passport');
// require("../middlewares/passportConfig")(passport)
require("../middlewares/passportConfig")
router.post('/signup',bycriptfn,registrationfn)
router.post('/login',login1fn)
router.get('/tasks',passport.authenticate('jwt',{session:false}),getallfn)
router.get('/tasks/:id',passport.authenticate('jwt',{session:false}),getspecificfn)
router.post('/tasks',passport.authenticate('jwt',{session:false}),createfn)
router.put('/tasks/:id',passport.authenticate('jwt',{session:false}),updatefn)
router.delete('/tasks/:id',passport.authenticate('jwt',{session:false}),deletefn)
 router.get('/locationsearch',passport.authenticate('jwt',{session:false}),locationsearch)

module.exports=router;
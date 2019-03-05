var express = require("express");
var router = express.Router();
var User = require('../../models/User.js');
var bcrypt = require("bcrypt");

router.post('/',async (req,res)=>{

var user = await User.findOne({username:req.body.username});
var mail = await User.findOne({email:req.body.email});
if(user){

res.status(400).send("user_exists");
}else if(mail){
  res.status(400).send("mail_exists");
}else{
   var user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
   
});

var salt =  await bcrypt.genSalt(10);
user.password = await bcrypt.hash(user.password,salt);
await user.save();
res.send();
}
});

module.exports = router;

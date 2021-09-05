const express = require('express');
const router = express.Router();
const path = require('path');
const app = express;
const User = require('../models/User');

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../Templates', 'Register.html'));
});

router.get('/style.css', function(req,res){
  res.sendFile(path.join(__dirname, '../Static/CSS', 'register.css'));
});

router.post('/', async (req, res) => {
  const newUser = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password,
    AreaOfExpertise: req.body.AreaOfExpertise,
    resume: req.body.resume,
  });
  await newUser
    .save()
    .then((new_user_obj) => {
      res.redirect('/Signin');
    })
    .catch((err) => console.log(err));
});
module.exports = router;

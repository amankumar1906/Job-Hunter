const express = require('express');
const router = express.Router();
const path = require('path');
const app = express;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../Templates','Signin.html'));
});

router.get('/style.css', function(req,res){
    res.sendFile(path.join(__dirname, '../Static/CSS', 'signin.css'));
  });

module.exports= router;

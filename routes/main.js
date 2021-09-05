const express = require('express');
const router = express.Router();
const path = require('path');
const app = express;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../Templates','Index.html'));
});

router.get('/style.css', function(req,res){
    res.sendFile(path.join(__dirname, '../Static/CSS', 'index.css'));
  });

  router.get('/bg.jpg', function(req,res){
    res.sendFile(path.join(__dirname, '../Static/Images', 'bg.jpg'));
  });
module.exports= router;

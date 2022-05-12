const express =require('express');
const mongoose = require('mongoose');
const router = express.Router();
const TweetModel = require('../models/tweet.model');


router.get('/tweet/:id',(req,res,next) => {
  const id = req.params.id;
  console.log('id',id);
  TweetModel.findById(id)
  .then
})
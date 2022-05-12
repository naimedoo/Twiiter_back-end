const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserModel = require('../models/User.model');

router.post('/homepage', async(req,res,next) => {
        const body = req.body;
        console.log("body ===>", body);
        const newUser = new UserModel(body)
    try {
        const user = await newUser.save()
        res.json(user)
    } catch(err) {
        console.error(err)
        res.status(500).send("internal server error")
    }
})

router.get('/homepage',(req,res,next) => {
    
})
module.exports = router;
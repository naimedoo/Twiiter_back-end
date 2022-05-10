const express = require('express');
const app =  express();
const mongoose = require('mongoose');
const PORT = 3002;

app.listen(PORT, () => {
    console.log('App is listening on port :', PORT)
})


app.post('/Login',(req,res,next) => {
    res.send('OK')
})

app.post('/Signup',(req,res,next) => {
    
})
app.get('/homepage',(req,res,next) => {
    
})
app.post('/homepege',(req,res,next) => {

})
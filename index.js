const express = require('express');
const app =  express();
const mongoose = require('mongoose');
const PORT = 3002;

app.listen(PORT, () => {
    console.log('App is listening on port :', PORT)
})

const userSchema = new mongoose.Schema({
    tweet:String,
    phoneNumber:Number,
    email:String,
    followers:Number,
    retweet:String,
    comments:[{
        body:String,
        date:Date
    }],
    date : {
        type:Date,
        default:Date.now()
    }
})
const UserModel = mongoose.model('User', userSchema)

const tweetSchema = new mongoose.Schema({
    user:{
        type:String,
        type:mongoose.Types.ObjectId
    },
        comment:String,
        retweets:String
})
const TweetModel = mongoose.model('tweet',tweetSchema)

const commentSchema = new mongoose.Schema({
    user:{
        type:String,
        type:mongoose.Types.ObjectId
    },
    tweet:String    
})

const CommentModel = mongoose.model('comment', commentSchema)


app.post('/Login',(req,res,next) => {
    res.send('OK')
})

app.post('/Signup',(req,res,next) => {
    
})
app.get('/homepage',(req,res,next) => {
    
})
app.post('/homepege',(req,res,next) => {

})
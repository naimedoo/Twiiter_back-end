const mongoose =require('mongoose');


const tweetSchema = new mongoose.Schema({
    user:{
        type:String,
        type:mongoose.Types.ObjectId
    },
        text:String,
        comment:String,
        retweets:Number
})

module.exports = mongoose.model('tweet',tweetSchema)

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user:{
        type:String,
        type:mongoose.Types.ObjectId
    },
    tweet:String    
})

module.exports = mongoose.model('comment', commentSchema)

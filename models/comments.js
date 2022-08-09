const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Comments = new schema(
    {
        blogId:{
            type:schema.Types.ObjectId,
            ref:'Posts'
        },
        comment:{
            type:Text,
            required:true
        },
        status:{
            type:Boolean,
            required:true
        },
        publishedAt:{
            type:Date,
            required:true
        },
        userId:{
            type:schema.Types.ObjectId,
            ref:"Users"
        }
    }
)

module.exports=mongoose.model('Comments',Comments)
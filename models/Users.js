const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Users = new schema(
    {
        _id:{
            type:String,
            required:true
        },
        image:{
            type:schema.Types.ObjectId,
            ref:'Images'
        },
        name:{
            type:String,
            required:true
        },
        role:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            required:true
        },
        aboutTheUser:Text,
        youtubeLink:Text,
        FacebookLink:Text,
        linkden:Text,
        twitter:Text
        
    }
)

module.exports=mongoose.model('Users',Users)
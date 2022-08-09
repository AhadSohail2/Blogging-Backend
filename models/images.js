const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Images = new schema(
    {
        imagePath:{
            type:String,
            required:true
        },
        overlay:{
            type:Boolean,
            required:true
        },
        alt:{
            type:String,
            required:true
        },
        width:{
            type:Number,
            required:true
        },
        height:{
            type:Number,
            required:true
        }
    }
)

module.exports=mongoose.model('Images',Images)
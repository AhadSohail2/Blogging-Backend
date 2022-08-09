const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Categories = new schema(
    {
        name:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model('Categories',Categories)
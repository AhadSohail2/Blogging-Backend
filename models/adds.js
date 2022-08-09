const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Adds = new schema(
    {
        location:{
            type:String,
            image:{
                type:schema.Types.ObjectId,
                ref:"Images",
                required:true
            }
        }
    }
)

module.exports=mongoose.model('Adds',Adds)
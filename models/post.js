const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Posts = new schema(
    {
        title: {
            type: "String",
            required: true
        },
        content: {
            type: Text,
            required: true
        },
        image: {
            type: schema.Types.ObjectId,
            ref: 'Images',
            required: true
        },
        metaTags: [{
            type: String,
            required: true
        }],
        author: {
            type: schema.Types.ObjectId,
            ref: "Users",
            required:true
        },
        publishedAt: {
            type: Date,
            required: true
        },
        tags: [{ type: String, required: true }],
        category:[
            {
                type:schema.Types.ObjectId,
                ref:"Categories",
                required:true
            }
        ],
        minReads:{
            type:Number,
            required:true
        },
        featured:{
            type:Boolean,
            requred:true
        },
        Views:{
            type:Number,
            required:true
        }
    }
)

module.exports = mongoose.model('Posts', Posts)
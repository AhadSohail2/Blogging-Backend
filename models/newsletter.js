const mongoose = require('mongoose');

const schema = mongoose.Schema;

const NewsLetterEmails = new schema(
    {
        email: {
            type: String,
            required: true
        },
        category: [{
            type: schema.Types.ObjectId,
            ref: "categories",
            required: true
        }]
    }
)

module.exports = mongoose.model('NewsLetterEmails', NewsLetterEmails)
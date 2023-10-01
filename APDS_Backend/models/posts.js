const mongoose = require('mongoose');

const postschema = mongoose.Schema(
    {
        postName:{type: String, required: true},
        postDescription: {type: String, required: true}
    }
);

module.exports = mongoose.model('Posts',postschema);
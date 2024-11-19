const mongoose = require('mongoose');

//inquiries schema
const inquiriesSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Inquiries', inquiriesSchema);

const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
   
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/ // Simple email validation
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Message = require('./Message'); // Import the Message model

const app = express();
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://adityamishra:adityamishra786@cluster0.eb2bu.mongodb.net/rotaract')
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Example route to create a message
app.post('/messages', async (req, res) => {
    const {  email, message } = req.body;

    try {
        const newMessage = new Message({ email, message });
        await newMessage.save();
        res.status(201).json({ success: true, message: 'Message saved successfully!' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ success: false, message: 'Failed to save message.' });
    }
});

// Example route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(5000, () => {
    console.log('Server is running in localhost:5000');
});

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Framework = require('./core/framework');
const Database = require('./core/db');
const ExampleController = require('./controllers/exampleController');
const Example = require('./models/exampleModel');

const app = express();
const framework = new Framework();

// Connect to the database
Database.connect('mongodb://localhost:27017/mydb');

// Register Controllers
framework.registerController('example', new ExampleController());

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public'))); // Ensure this points to your 'public' folder

// API Routes
app.post('/api/data', async (req, res) => {
    try {
        const newExample = new Example(req.body);
        await newExample.save();
        res.status(201).json(newExample);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/api/data', async (req, res) => {
    try {
        const data = await Example.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/api/data/:id', async (req, res) => {
    try {
        const deletedExample = await Example.findByIdAndDelete(req.params.id);
        if (!deletedExample) {
            return res.status(404).json({ message: 'Example not found' });
        }
        res.json(deletedExample);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/api/data/:id', async (req, res) => {
    try {
        const updatedExample = await Example.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedExample) {
            return res.status(404).json({ message: 'Example not found' });
        }
        res.json(updatedExample);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Initialize framework
framework.init();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

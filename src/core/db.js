/*const mongoose = require('mongoose');

class Database {
    static connect(uri) {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }
}

module.exports = Database;*/

const mongoose = require('mongoose');

const connect = async (connectionString) => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};

module.exports = { connect };







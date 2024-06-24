const mongoose = require('mongoose');

class Database {
    static connect(uri) {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }
}

module.exports = Database;

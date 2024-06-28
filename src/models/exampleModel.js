/*const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
    name: String,
    value: Number
});

const Example = mongoose.model('Example', exampleSchema);

module.exports = Example;*/

const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
    name: String,
    value: Number
});

let Example;

const setExampleModel = (collectionName = 'examples') => {
    Example = mongoose.model('Example', exampleSchema, collectionName);
    console.log(`Model set to collection: ${collectionName}`);
};

// Initially set the model to a default collection name
setExampleModel();

module.exports = { Example, setExampleModel };





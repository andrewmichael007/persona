// this is a schema file. it's basically the blue print of the data to be stored

// require mongoose
const mongoose = require("mongoose");


// create a blueprint to represent how mongodb should expect and represent data
const message = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required:  true},
    message: {type: String, required: true},
    createdAt: {type: Date, dafault: Date.now}
});

// export module with the name of the file and name of the schema formed
module.exports = mongoose.model(/*filename*/ "schema", message /*function*/);
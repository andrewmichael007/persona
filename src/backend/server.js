// require statements
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


// setting up server named app
const app = express();

//middleware
app.use(cors());
// telling my server to understand json format of express
app.use(express.json());

//mongodb connection
mongoose.connect(process.env.MONGO_URI, {
    // parses the connection string properly
    // useNewUrlParser: true,
    // uses more stable way to connect
    // useUnifiedTopology: true
}).then(() => console.log("mongodb connected"))
  .catch(err => console.error(err));

// setting up a post  route called contacts
app.post('/contacts', (req, res) => {
    res.status(201).send("message sent");
});

// storing the uri and port number
const PORT = process.env.MONGO_URI || 8080;

app.listen(PORT, () => {
    console.log(`server is ready at port ${PORT}`);
});
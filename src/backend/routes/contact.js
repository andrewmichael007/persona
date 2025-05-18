// this is  the contact route function
// /routes/contact.js

const express = require("express");
const router = express.Router();
const schema = require("../models/schema")

router.post("/", async(req,res) => {
    const { name , email, message } = req.body;
    try {
        const newSchema = new schema({name, email, message});
        await newSchema.save();
        res.status(200).json({success : true, msg: "message sent"});
    }catch(err){
        console.log(err);
        res.status(500).json({success: false, msg: "server error"});
    }
});

// export the contact route function
module.exports = router;
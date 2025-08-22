// this is  the contact route function
// /routes/contact.js

const express = require("express");
const router = express.Router();
const schema = require("../models/schema");
const { body, validationResult } = require("express-validator");
const rateLimit = require("express-rate-limit");
const axios = require("axios");
// const nodemailer = require("nodemailer");

// defining rate limiter to limit the number of requests
const rateLimiter = rateLimit({
    //window time
    windowMs: 15 * 60 * 1000, // 15 minutes
    //maximum number of requests
    max : 5,
    message: {
        success: false,
        msg: "too many requests, try again after an hour"
    }
});

//creating the email transporter
// const emailTransporter = nodemailer.createTransport({
//     host: "localhost",
//     port: 3000,
//     secure: false,
//     service:"gmail",
//     auth:{
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     }
// });

// routing the contact.js component
router.post(
    "/",
    //calling rateLimiter
    rateLimiter,

    //validator
    [
        body('name').trim().notEmpty().isLength({ min: 5 }).withMessage("name is required"),
        body('email').isEmail().withMessage("invalid email"),
        body('message').trim().notEmpty().withMessage("message is required"),
        body('recaptchaToken').notEmpty().withMessage('reCAPTCHA is required')
    ],

    async(req,res) => {

        //checking for errors
        const errors = validationResult(req);
        if(!errors.isEmpty() ){
            return res.status(400).json({ success : false , errors: errors.array() });
        }

        const { name , email, message, recaptchaToken } = req.body;

        // Verify reCAPTCHA
        const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${recaptchaToken}`;

        try {
            const captchaResponds = await axios.post(verifyURL);
            
            if (!captchaResponds.data.success) {
                return res.status(400).json({ success: false, msg: 'Failed reCAPTCHA verification' });
            }

            //saving messages to mongo
            const newSchema = new schema({name, email, message});
            await newSchema.save();

            res.status(200).json({success : true, msg: "message sent"});

            //after saving email, let's send the email
            // await emailTransporter.sendMail({
            //     from:`"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            //     to: process.env.EMAIL_USER, //to my email stored in .env file
            //     subject: "New Message", 
            //     html:` 
            //         <h3> New Message Received </h3>
            //         <p><strong> Name: </strong> ${name} </p>
            //         <p><strong> Email: </strong> ${email} </p>
            //         <p><strong> Message: </strong> ${message} </p> 
            //     `
            // });

        }
        catch(error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    }
);

// export the contact route function
module.exports = router;



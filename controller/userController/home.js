const nodemailer = require('nodemailer');


const userHome = async (req, res) => {
    try {
        res.render('home');
    } catch (error) {
        console.error('Error in userHome:', error);
        res.redirect('/userError');
    }
};

const userAbout = async (req, res) => {
    try {
        res.render('about');
    } catch (error) {
        console.error('Error in userAbout:', error);
        res.redirect('/userError');
    }
};

const userContact = async (req, res) => {
    try {
        res.render('contact');
    } catch (error) {
        console.error('Error in userContact:', error);
        res.redirect('/userError');
    }
};




const contactPost = async (req, res) => {
    try {
        const { name, email, interest, message } = req.body;

        
        const transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: 'justramin000@gmail.com',
                pass: 'slbc tvdv upse gayc', 
            },
        });

        
        const mailOptions = {
            from: email, 
            to: 'justramin000@gmail.com', 
            subject: `New Contact Form Submission from ${name}`, 
            text: `
                Name: ${name}
                Email: ${email}
                Interest: ${interest}
                Message: ${message}
            `, 
            html: `
                <h1>Contact Form Submission</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Interest:</strong> ${interest}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        };

        
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');

        
        res.redirect('/');
    } catch (error) {
        console.error('Error in contactPost:', error);
        res.redirect('/userError');
    }
};



module.exports = {
    userHome,
    userAbout,
    userContact,
    contactPost
};

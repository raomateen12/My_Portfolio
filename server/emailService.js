const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

// Function to read email template and replace placeholders
const readTemplate = (templateName, data) => {
    const templatePath = path.join(__dirname, 'emailTemplates', `${templateName}.html`);
    let template = fs.readFileSync(templatePath, 'utf8');
    
    // Replace all placeholders with actual data
    Object.keys(data).forEach(key => {
        const regex = new RegExp(`{{${key}}}`, 'g');
        template = template.replace(regex, data[key]);
    });
    
    return template;
};

// Function to send email to client
const sendClientAutoResponse = async (to, data) => {
    try {
        const html = readTemplate('clientAutoResponse', data);
        
        await transporter.sendMail({
            from: `"Rao Mateen Web Services" <${process.env.SMTP_FROM_EMAIL}>`,
            to,
            subject: 'Thank you for contacting us!',
            html,
        });
        
        return { success: true };
    } catch (error) {
        console.error('Error sending client auto-response:', error);
        return { success: false, error: error.message };
    }
};

// Function to send admin notification
const sendAdminNotification = async (adminEmail, data) => {
    try {
        const html = readTemplate('adminNotification', {
            ...data,
            submittedAt: new Date().toLocaleString(),
        });
        
        await transporter.sendMail({
            from: `"Portfolio Contact Form" <${process.env.SMTP_FROM_EMAIL}>`,
            to: adminEmail,
            subject: `New Contact Form Submission: ${data.subject || 'No Subject'}`,
            html,
        });
        
        return { success: true };
    } catch (error) {
        console.error('Error sending admin notification:', error);
        return { success: false, error: error.message };
    }
};

module.exports = {
    sendClientAutoResponse,
    sendAdminNotification,
};

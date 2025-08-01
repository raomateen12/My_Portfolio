# Portfolio Backend - Email Service

This service handles contact form submissions and sends email notifications using Nodemailer.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd server
   npm install
   ```

2. **Configure Environment Variables**
   - Copy `.env.example` to `.env`
   - Update the values in `.env` with your email service details

3. **Start the Server**
   ```bash
   # Development (with auto-reload)
   npm run dev
   
   # Production
   npm start
   ```

## API Endpoints

- `POST /api/contact` - Submit contact form
  - Required fields: `name`, `email`, `message`
  - Optional field: `subject`

## Email Templates

Templates are located in the `emailTemplates` directory:
- `clientAutoResponse.html` - Sent to the person who filled the contact form
- `adminNotification.html` - Sent to the admin email

## Environment Variables

- `SMTP_HOST` - Your SMTP server host
- `SMTP_PORT` - SMTP port (usually 587 for non-SSL, 465 for SSL)
- `SMTP_SECURE` - true/false (use SSL/TLS)
- `SMTP_USER` - Your email username
- `SMTP_PASSWORD` - Your email password
- `SMTP_FROM_EMAIL` - Sender email address
- `ADMIN_EMAIL` - Email to receive contact form submissions
- `PORT` - Server port (default: 5000)

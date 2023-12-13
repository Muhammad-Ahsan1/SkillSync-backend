const nodeMailer = require("nodemailer");
const {
  nodeMailerEmail,
  nodeMailerPassword
} = require("../../config");

const registrationTemplate = async (userData) => {
  const {
    fullName,
    email
  } = userData;
  // Send Email
  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: nodeMailerEmail, // sender address
      pass: nodeMailerPassword, // sender pass√
    },
  });

  const customHtml = finalizedHtml(fullName)
  await transporter.sendMail({
    from: nodeMailerEmail, // sender address
    to: email, // list of receivers
    subject: "Registration Completed", // Subject line
    text: `Hello ${email}`, // plain text body
    html: customHtml, // html body
  });
};

const finalizedHtml = (fullName) => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Registration Confirmation - Skill Sync</title>
  
      <style>
          /* Internal CSS for styling */
          body {
              font-family: 'Helvetica', 'Arial', sans-serif;
              background-color: #f8f8f8;
              margin: 0;
              padding: 0;
              text-align: center;
          }
  
          .container {
              max-width: 600px;
              margin: 30px auto;
              background-color: #ffffff;
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          }
  
          h1 {
              color: #333;
              margin-bottom: 20px;
          }
  
          p {
              color: #555;
              line-height: 1.6;
              margin-bottom: 15px;
          }
  
          .button {
              display: inline-block;
              padding: 12px 24px;
              background-color: #4CAF50;
              color: white;
              text-decoration: none;
              border-radius: 5px;
              transition: background-color 0.3s ease;
          }
  
          .button:hover {
              background-color: #45a049;
          }
  
          .footer {
              margin-top: 20px;
              color: #888;
          }
      </style>
  </head>
  
  <body>
  
      <div class="container">
          <h1>Welcome to Skill Sync!</h1>
          <p>Dear ${fullName},</p>
          <p>Thank you for choosing Skill Sync. We are delighted to inform you that your registration was successful.</p>
          <p>Explore a world of possibilities to enhance your skills and stay ahead in your journey to success.</p>
  
          <a href="http://localhost:3000/login" class="button">Get Started</a>
  
      </div>
  
  </body>
  
  </html>
  `
}

module.exports = {
  registrationTemplate,
}
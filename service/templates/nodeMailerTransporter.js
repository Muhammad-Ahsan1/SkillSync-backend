const nodeMailer = require("nodemailer");

const registrationTemplate = async (userData) => {
  // Send Email
  // TODO: MAKE THIS EMAIL WORKING DOING THE GOOGLE AUTH PROCESS TO MAKE MY APP SECURE
  const transporter = nodeMailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      user: 'ahsanawais786b@gmail.com', // sender address
      pass: 'jbibybyawwgjctbp', // sender pass√
    },
  });
  const info = await transporter.sendMail({
    from: 'ahsanawais786b@gmail.com', // sender address
    to: 'kamille.veum45@ethereal.email', // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world AHSAN IS HERE?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
};

module.exports = {
  registrationTemplate,
}
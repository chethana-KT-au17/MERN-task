const nodemailer = require('nodemailer')



function mail(info, text){
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
    auth: {
      user: 'dogs.lovencare@gmail.com',
      pass: 'loveNcare'
    }
});

let mailOptions = {
    from: 'dogs.lovencare@gmail.com',
    to: info,
    subject: 'Appriciation For Donation',
    text: `Thank you for your generous gift to LOVE N CARE.
      We are thrilled to have your support. Through your donation we will accomplish our goals and continue working towards saving DOGS.
      You truly make the difference for us, and we are extremely grateful!
      REGARDS
      TEAM LOVE N CARE`

};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});

}
module.exports.mail=mail


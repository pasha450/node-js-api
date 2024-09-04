const nodemailer = require('nodemailer');
let transporter  = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b576ccfb39fdff",
      pass: "3d7a7796307f62"
    }
  });


// let renderTemplate = (token) => {
//     let mailHTML;
//     renderFile(
//         token,
//         function(err, template){
//             if (err){console.log('error in rendering template',err); return}
//             mailHTML = template;
//         }
//     )
//     return mailHTML;
// }
module.exports = {

    transporter: transporter,
    // renderTemplate : renderTemplate
}
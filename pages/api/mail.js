
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    const body = JSON.parse(req.body);

    const message = `
    
    Name: ${body.yname}\r\n
    Email: ${body.email}\r\n
    Project Type: ${body.projecttype}\r\n
    Phone: ${body.phone}\r\n
    Zip Code: ${body.zip}
    `;

    const data = {
          
        to: [{ "email" : "jay@truwin.com"}, { "email" : "tom@truwin.com"} ],
        bcc: "michael@alwayscreative.co",
        from: 'michael@alwayscreative.co',
        subject: 'New Customer Request',
        text: message,
        html: message.replace(/\r\n/g, '<br/>')
    }

    await mail.send(data);

    res.status(200).json({ status: 'Okay' });
  }
  

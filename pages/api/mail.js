
//const mail = require('@sendgrid/mail');

//mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
    const body = JSON.parse(req.body);

    const message = `
    
    Name: ${body.yname}r\n
    Email: ${body.email}r\n
    Project Type: ${body.projecttype}r\n
    Phone: ${body.phone}r\n
    Zip Code: ${body.zip}

    `;

    const data = {
        to: 'michael@alwayscreative.co',
        from: 'michael@alwayscreative.co',
        subject: 'New Get Started Form',
        text: message,
        html: message.replace(/\r\n/g, '<br>')

    }

    mail.send(data);

    console.log(body);
    res.status(200).json({ status: 'Okay' });
  }
  
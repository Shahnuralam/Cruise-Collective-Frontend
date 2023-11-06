import sgMail from '@sendgrid/mail';
export default async (req, res) => {
    const { email, subject, emailTemplate } = req.body;
    
    try {
        // Send the email using SendGrid
        await sendEmail(email, subject, 'qasa', emailTemplate);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const sendEmail = async (to, subject, text, html) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to,
        from: 'shahnur@wafisolutions.com',
        subject,
        text,
        html
    };

    try {
        await sgMail.send(msg);
        // console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error(error);
    }
};
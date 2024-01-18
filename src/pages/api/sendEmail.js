import sgMail from "@sendgrid/mail";

export default async (req, res) => {
  const { email, subject, emailTemplate } = req.body;

  try {
    // Send the email using SendGrid
    await sendEmail(email, subject, "qasa", emailTemplate);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const sendEmail = async (to, subject, text, html) => {
  // eslint-disable-next-line no-undef
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to,
    // eslint-disable-next-line no-undef
    from: process.env.SENDGRID_SENDER_EMAIL,
    subject,
    text,
    html,
    // eslint-disable-next-line no-undef
    replyTo: process.env.SENDGRID_SENDER_NO_EMAIL,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
};

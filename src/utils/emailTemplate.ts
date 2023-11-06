

export const signUpEmailTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Email Confirmation</title>
  <style>
    /* Add your custom CSS styles here */
    body {
      background-color: #f4f4f4;
      font-family: Arial, sans-serif;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-top: 3px solid #1a82e2;
    }
    h1 {
      font-size: 28px;
      color: #333333;
      margin: 0;
    }
    p {
      font-size: 16px;
      color: #555555;
      line-height: 1.6;
    }
    .button {
      display: inline-block;
      padding: 15px 30px;
      background-color: rgba(255, 154, 49, 0.9);
      color: #ffffff;
      font-size: 18px;
      text-decoration: none;
      border-radius: 6px;
      margin-top: 20px;
      transition: background-color 0.3s, color 0.3s;
    }
    .button:hover {
      background-color: #1a82e2;
      color: #ffffff;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Confirm Your Email Address</h1>
    <p>Tap the button below to confirm your email address. If you didn't create an account with us, you can safely delete this email.</p>
    <a class="button" href="${window.location.href}" target="_blank">Confirm</a>
    <p>If that doesn't work, copy and paste the following link in your browser:</p>
    <p><a href="https://blogdesire.com" target="_blank">https://blogdesire.com/xxx-xxx-xxxx</a></p>
    <p>Cheers,<br> Paste</p>
  </div>
</body>
</html>

`;
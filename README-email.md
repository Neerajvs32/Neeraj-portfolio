Contact form email setup

1) Install dependencies
   npm install

2) Configure environment (.env already created)
   EMAIL_USER="neerajsalehittal3235@gmail.com"
   EMAIL_PASS="fsiz gqzv ubww uigt"
   EMAIL_TO="neerajsalehittal3235@gmail.com"
   PORT=3000

3) Run the server
   npm start

4) Open the site
   http://localhost:3000/classic.html

5) Test contact form
   Fill in name, email, message, and optional phone. Submit. You should receive an email in the inbox set by EMAIL_TO.

Notes
- Do not commit .env publicly. Rotate app password if already exposed.
- If Gmail blocks the sign-in, check the account security alerts and allow the new app password usage.
- For production behind a different domain, ensure the site posts to the correct path or absolute URL of /api/contact.

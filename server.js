require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const upload = multer();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(__dirname)); // serve static site

// Health check
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// Contact form endpoint
app.post('/api/contact', upload.none(), async (req, res) => {
  try {
    const { name, email, message, phone } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    // Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const to = process.env.EMAIL_TO || process.env.EMAIL_USER;

    const mailOptions = {
      from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
      to,
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      text: `You have a new message from your portfolio site.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
      html: `<div style="font-family:Arial,sans-serif;line-height:1.6">\n        <h2>New contact form submission</h2>\n        <p><strong>Name:</strong> ${escapeHtml(name)}</p>\n        <p><strong>Email:</strong> ${escapeHtml(email)}</p>\n        <p><strong>Phone:</strong> ${escapeHtml(phone || 'N/A')}</p>\n        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g,'<br/>')}</p>\n      </div>`,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ ok: true, message: 'Email sent' });
  } catch (err) {
    console.error('Contact error:', err);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
});

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

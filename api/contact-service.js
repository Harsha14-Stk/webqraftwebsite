const nodemailer = require('nodemailer');

function isDevelopmentMode() {
  return String(process.env.NODE_ENV || '').toLowerCase() !== 'production';
}

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    if (isDevelopmentMode()) {
      return null;
    }

    throw new Error('SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    }
  });
}

async function sendContactEmail(payload) {
  const { name, email, message, projectType = [] } = payload || {};

  if (!name || !email || !message) {
    const error = new Error('Missing required fields');
    error.statusCode = 400;
    throw error;
  }

  const transporter = getTransport();
  const toAddress = process.env.SMTP_TO || process.env.SMTP_USER;
  const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;

  if (!transporter && isDevelopmentMode()) {
    console.warn('Contact form received in development mode:', {
      name,
      email,
      projectType,
      message
    });

    return { message: 'Your message was sent successfully' };
  }

  if (!toAddress || !fromAddress) {
    throw new Error('Set SMTP_TO and SMTP_FROM (or use SMTP_USER as a fallback).');
  }

  const subject = `New WebQraft enquiry from ${name} <${email}>`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Project type: ${Array.isArray(projectType) && projectType.length ? projectType.join(', ') : 'Not specified'}`,
    '',
    'Message:',
    message
  ].join('\n');

  try {
    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject,
      text: body,
      html: body.replace(/\n/g, '<br />')
    });
  } catch (error) {
    if (isDevelopmentMode()) {
      console.warn('SMTP send failed in development mode, accepting message locally:', error.message || error);
      return { message: 'Your message was sent successfully' };
    }

    throw error;
  }

  return { message: 'Your message was sent successfully' };
}

module.exports = { sendContactEmail };

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { sendContactEmail } = require('./api/contact-service');

const app = express();
const port = Number(process.env.PORT || 5000);

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    const result = await sendContactEmail(req.body);
    res.status(200).json(result);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({ message: error.message || 'Unable to send message' });
  }
});

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});


app.listen(port, () => {
  console.log(`SMTP server listening on http://localhost:${port}`);
});

const express = require('express');
const app = express();

// Middleware to parse JSON payloads
app.use(express.json());

// Debugging log to ensure the server starts
console.log("Server is starting...");

// Webhook endpoint
app.post('/webhook', (req, res) => {
  console.log('POST /webhook hit:', req.body);
  res.status(200).send('Webhook received successfully!');
});

// Health check endpoint
app.get('/', (req, res) => {
  console.log("GET / hit");
  res.send('API is running!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const app = express();

app.use(express.json()); // Parse incoming JSON payloads

// Webhook endpoint
app.post('/webhook', (req, res) => {
  console.error('New webhook received from DigiStore:', req.body);

  const { event, product_id, order_id, amount } = req.body;

  if (event === 'sale') {
    console.error(`🎉 New purchase received!`);
    console.error(`Product ID: ${product_id}`);
    console.error(`Order ID: ${order_id}`);
    console.error(`Amount: ${amount}`);
  }

  res.status(200).send('Webhook received successfully!');
});

// Health check
app.get('/', (req, res) => {
  res.send('API is running!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.error(`Server running on port ${PORT}`);
});
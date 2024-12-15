const express = require('express');
const app = express();

app.use(express.json()); // Parse incoming JSON payloads

// Webhook endpoint
app.post('/webhook', (req, res) => {
  // Log the incoming payload
  console.log('New webhook received from DigiStore:', req.body);

  // Check for a purchase event
  const { event, product_id, order_id, amount } = req.body;

  if (event === 'sale') {
    error.log(`🎉 New purchase received!`);
    console.log(`Product ID: ${product_id}`);
    console.log(`Order ID: ${order_id}`);
    console.log(`Amount: ${amount}`);
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
  console.log(`Server running on port ${PORT}`);
});
const axios = require('axios');
const querystring = require('querystring');

// Data to send
const data = {
  "verification_token": "your-verification-token",
  "message_id": "unique-message-id",
  "timestamp": "current-timestamp",
  "type": "Subscription", // Change as needed
  "is_public": true,
  "from_name": "Jo Example",
  "message": 'This is my id : 1239753854669815869',
  "amount": "5.00",
  "url": "https://ko-fi.com/Home/CoffeeShop?txid=00000000-1111-2222-3333-444444444444",
  "email": "jo.example@example.com",
  "currency": "USD",
  "is_subscription_payment": true,
  "is_first_subscription_payment": true,
  "kofi_transaction_id": "00000000-1111-2222-3333-444444444444",
  "shop_items": null,
  "tier_name": 3,
  "shipping": null
};

// URL of the webhook endpoint
const webhookUrl = 'http://localhost:3000/webhook/kofi'; // Update with your actual URL

// Prepare URL-encoded data
const urlEncodedData = querystring.stringify({ data: JSON.stringify(data) });

// Send POST request
axios.post(webhookUrl, urlEncodedData, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then(response => {
    console.log('Data sent successfully:', response.data);
  })
  .catch(error => {
    console.error('Error sending data:', error);
  });

# Ko-fi Webhook Tester

A simple Node.js script to emulate Ko-fi webhook events for testing purposes. This tool helps developers simulate incoming webhook data from Ko-fi to test their integrations without needing actual live transactions.

## Features
- Emulates a Ko-fi webhook event with customizable data.
- Sends a POST request to your local server or any specified URL.
- Supports URL-encoded data format.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- [Axios](https://www.npmjs.com/package/axios) library for sending HTTP requests.

### Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/kofi-webhook-tester.git
    cd kofi-webhook-tester
    ```

2. **Install dependencies:**
    ```bash
    npm install axios querystring
    ```

### Usage
1. **Edit the script to customize the webhook data:**

    In the `index.js` file, modify the `data` object to match the webhook event you want to simulate. 

    ```javascript
    const data = {
      "verification_token": "your-verification-token",
      "message_id": "unique-message-id",
      "timestamp": "current-timestamp",
      "type": "Subscription",  // Change as needed
      "from_name": "Name",
      "message": "Your message",
      "amount": "5.00",
      "url": "https://ko-fi.com/YourPage",
      "email": "email@example.com",
      "currency": "USD",
      "is_subscription_payment": true,
      "is_first_subscription_payment": true,
      "kofi_transaction_id": "transaction-id",
      "tier_name": "3",
      "shipping": null
    };
    ```

2. **Run the script:**
    ```bash
    node index.js
    ```
    This will send a POST request to the specified `webhookUrl`.

3. **Customize Webhook URL:**
    Update the `webhookUrl` variable in the script to point to your local server or any other endpoint you want to test.

    ```javascript
    const webhookUrl = 'http://localhost:3000/webhook/kofi';
    ```

### Example Response
When the script runs successfully, you should see:
```bash
Data sent successfully: { response_data_here }
``` 

## Get More Help

Join my [discord](https://discord.gg/zpW4z2afnA) To contact and ask for more help !
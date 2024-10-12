const cron = require('node-cron');
const axios = require('axios');

// Define the cron job
cron.schedule('*/5 * * * *', async () => {
  console.log('Cron job running at the start of every 5minutes');

  try {
    // Make a GET request to your domain
    const response = await axios.get('https://justinportfolio.onrender.com/');
  } catch (error) {
    console.error('Error making request:', error);
  }
});
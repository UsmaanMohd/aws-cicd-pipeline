const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//home route
app.get('/', (req, res) => {
  res.send('Hello! My CI/CD pipeline is working 🎉');
});

// for verifying deployment
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'App is healthy' });
});
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
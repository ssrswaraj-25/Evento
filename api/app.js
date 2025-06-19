// Use the contact route middleware
app.use('/contact', contactRoute);

const express = require('express');
const app = express();

// Use the contact route middleware
app.use('/contact', contactRoute);

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

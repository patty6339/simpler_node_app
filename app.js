const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple health check route
app.get('/', (req, res) => {
  res.send('Hello from Node.js App running on Kubernetes!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

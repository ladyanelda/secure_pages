const express = require('express');
const path = require('node:path');

const app = express();
const port = process.env.PORT || 3000;

// Serve only files inside public, using a path relative to this file.
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Secure Pages is running at http://localhost:${port}`);
});

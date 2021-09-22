const express = require('express');
const cors = require('cors');

const PORT = 4000 || process.env.PORT;
const app = express();





app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}...`);
})
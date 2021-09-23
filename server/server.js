const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const PORT = 4000 || process.env.PORT;
const app = express();

app.use(
    cors({
      origin: "*",
    })
);


const goods = require('./router/goods');
const banner = require('./router/banner');
const categories = require('./router/categories');


app.use("/api/goods", goods);
app.use("/api/banner", banner);
app.use("/api/categories", categories);

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}...`);
})
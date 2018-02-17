const express = require('express');
const schema = require('./outfits/1.json');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening On port *${port}`));

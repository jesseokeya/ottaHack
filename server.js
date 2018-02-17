const express = require('express');
const schema = require('./outfits/1.json');
const app = express();

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/src/"));

app.get(['/', '/home'], (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
})

app.get('/outfit', (req, res) => {
  res.send(schema)
})

app.listen(port, () => console.log(`app running on port *${port}`));

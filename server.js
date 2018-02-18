const express = require('express');
const schema = require('./outfits/1.json');
const logger = require('morgan');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const request = require('request');
const queryString = require('query-string');
const { constructUrl, websites, convertToJson } = require('./scrape');
const app = express();

const port = process.env.PORT || 3000;

app.use(logger('dev'));
// create application/json parser
const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + "/src/"));

app.get([
  '/', '/home'
], (req, res) => {
  res.sendFile(__dirname + '/src/dashboard.html');
})

app.get('/outfit', (req, res) => {
  res.send(schema)
})

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/src/form.html');
})

app.get('/match', (req, res) => {
  res.sendFile(__dirname + '/src/match.html');
})


app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/src/dashboard.html');
})

app.get('/uniqlo', (req, res) => {
  const p = req.query;
  const url = constructUrl(p.sex, p.category, p.type, websites.lowEndStores.uniqlo)
  console.log(url);
  fetch(url).then(res => res.text()).then((body) => {
    const data = [];
    const $ = cheerio.load(body);
    $('.unit').each(function(i, elm) {
      data.push($(this).html())
    });
    res.send(convertToJson(data))
  }).catch(err => {
    throw err;
  })
})

app.get('/gucci', (req, res) => {
  const p = req.query;
  const url = constructUrl(p.sex, p.category, p.type, websites.highEndStores.gucci)
  console.log(url);
  fetch(url).then(res => res.text()).then((body) => {
    const data = [];
    const $ = cheerio.load(body);
    $('.carousel-item').each(function(i, elm) {
      data.push($(this).html())
    });
    res.send(data)
  }).catch(err => {
    throw err;
  })
})

app.listen(port, () => console.log(`app running on port *${port}`));

const cheerio = require('cheerio');

const websites = {
  lowEndStores: {
    uniqlo: 'http://www.uniqlo.com/ca/en/product/${sex}/${category}/${type}'
  },
  highEndStores: {
    gucci: 'https://www.gucci.com/ca/en/ca/${sex}/mens-ready-to-wear/mens-${type}-c-men-readytowear-${type}'
  }
}

const constructUrl = (sex, category, type, url) => {
  let newUrl = url.replace('${sex}', sex);
  newUrl = newUrl.replace('${category}', category);
  newUrl = newUrl.replace('${type}', type);
  newUrl = newUrl.replace('${type}', type);
  return newUrl;
}

const convertToJson = (arrayOfHtml) => {
  const result = []
  //console.log(arrayOfHtml);
  for (let i in arrayOfHtml) {
    newObject = {
      name: getNamePrice(arrayOfHtml[i])[0],
      image: getImage(arrayOfHtml[i]),
      link: getLink(arrayOfHtml[i]),
      price: getNamePrice(arrayOfHtml[i])[1]
    }
    result.push(newObject);
  }
  return result;
}

const getNamePrice = (htmlstring) => {
  const $ = cheerio.load(htmlstring);
  const data = $.text().split(" ");
  const result = []
  for (let i in data) {
    if (data[i] !== '' && data[i] !== '\t' && data[i] !== '\n\t' && data[i] !== '\n') {
      result.push(data[i]);
    }
  }
  let title = "";
  let price = "";
  for (let i in result) {
    if (isNum(parseInt(result[i]))) {
      price += result[i];
    }else{
      title = title  + " " + result[i];
    }
  }
  title = title.replace('$', '');
  return[title, price]
}

const getImage = (htmlstring) => {
  const $ = cheerio.load(htmlstring);
  return $('img').attr('src')
}

const getLink = (htmlstring) => {
  console.log(htmlstring);
  const $ = cheerio.load(htmlstring);
  return 'http://www.uniqlo.com/' + $('a').attr('href')
}

const isNum = (str) => {
  var pattern = /^\d+$/;
  return pattern.test(str); // returns a boolean
}

module.exports = {
  constructUrl,
  websites,
  convertToJson,
};

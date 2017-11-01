const axios = require('axios');
const cheerio = require('cheerio');
const { vendorUrls } = require('./vendorUrls.js');

// vendorUrls scraped by hand from
// http://madeinbaltimore.org/business-directory/

getVendorProfiles = async url => {
  console.log(url);
  const response = await axios.get(url);
  const html = await cheerio.load(response.data);
  return await html;
};

const getVendorProfile = url => {
  axios
    .get(url)
    .then(response => {
      const html = cheerio.load(response.data);
      console.log('here goes CHEERIO!', html);
    })
    .catch(error => {
      console.log(error);
    });
};

const getProfile = async function(url) {
  try {
    const response = await axios.get(url);
    const html = await cheerio.load(response.data);
    console.log(html);
  } catch (e) {
    console.log(e);
  }
  return title;
};

console.log(getProfile(vendorUrls[2]));

// vendorUrls.forEach(url => {
//   getVendorProfile(url);
// });

// 1. load a MIB vendor URL
// 2. find ('.wcpv-vendor-profile.entry-summary') and copy all of its childNodes
// 3. extract out any URLs and <p> contents

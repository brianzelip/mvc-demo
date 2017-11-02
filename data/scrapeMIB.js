const axios = require('axios');
const cheerio = require('cheerio');
const { vendorUrls } = require('./vendorUrls.js');
const fs = require('fs');

// 1. Input a MIB vendor URL,
//    output the vendor summary appended to a file.
const getVendorData = function(url) {
  axios
    .get(url)
    .then(response => {
      const $ = cheerio.load(response.data);
      return $('.wcpv-vendor-profile.entry-summary').html();
    })
    .then(response => fs.appendFile('vendorSummaries.html', response));
};

// 2. Get all the vendors
//    In practice though, i had to edit the array file to only serve up 10 urls
//    during a map at once, any more than 10, at least when I tried 13,
//    only a portion returned. When there were max 10 urls in the array,
//    it always worked.
vendorUrls.map(url => {
  getVendorData(url);
});

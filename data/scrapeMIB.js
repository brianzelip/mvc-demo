const axios = require('axios');
const cheerio = require('cheerio');

// vendorUrls scraped by hand from
// http://madeinbaltimore.org/business-directory/
const vendorUrls = [
  'http://madeinbaltimore.org/vendor/childhood-store',
  'http://madeinbaltimore.org/vendor/namascents-candle-co',
  'http://madeinbaltimore.org/vendor/azellaz',
  'http://madeinbaltimore.org/vendor/maritime-applied-physics-corporation',
  'http://madeinbaltimore.org/vendor/charm-city-chocolate',
  'http://madeinbaltimore.org/vendor/huckles',
  'http://madeinbaltimore.org/vendor/mondo-deco',
  'http://madeinbaltimore.org/vendor/stellarium-jewelry',
  'http://madeinbaltimore.org/vendor/atwaters',
  'http://madeinbaltimore.org/vendor/thread-coffee',
  'http://madeinbaltimore.org/vendor/hex-ferments',
  'http://madeinbaltimore.org/vendor/holding-pattern-studio',
  'http://madeinbaltimore.org/vendor/juniper-culinary-apothecary',
  'http://madeinbaltimore.org/vendor/kendall-kelly-inc',
  'http://madeinbaltimore.org/vendor/sevi',
  'http://madeinbaltimore.org/vendor/regalclothes',
  'http://madeinbaltimore.org/vendor/made-by-itineris',
  'http://madeinbaltimore.org/vendor/bliss-woodworks',
  'http://madeinbaltimore.org/vendor/whitepaws-runmitts',
  'http://madeinbaltimore.org/vendor/wight-tea-company',
  'http://madeinbaltimore.org/vendor/jgpottery',
  'http://madeinbaltimore.org/vendor/la-loupe-design',
  'http://madeinbaltimore.org/vendor/doubledutch-boutique',
  'http://madeinbaltimore.org/vendor/ybi-african-apparel-boutique-international',
  'http://madeinbaltimore.org/vendor/zeskinds-hardware-millwork',
  'http://madeinbaltimore.org/vendor/urban-roots-company',
  'http://madeinbaltimore.org/vendor/creative-king',
  'http://madeinbaltimore.org/vendor/artisan-glass-works-inc',
  'http://madeinbaltimore.org/vendor/sebastian-martorana',
  'http://madeinbaltimore.org/vendor/natashas-just-brittle',
  'http://madeinbaltimore.org/vendor/atwaters',
  'http://madeinbaltimore.org/vendor/words-with-boards',
  'http://madeinbaltimore.org/vendor/bazaar',
  'http://madeinbaltimore.org/vendor/alpha-graphics-inc',
  'http://madeinbaltimore.org/vendor/fly-nerd-apparel',
  'http://madeinbaltimore.org/vendor/curry-printing-copy-center',
  'http://madeinbaltimore.org/vendor/copy-cat-printing',
  'http://madeinbaltimore.org/vendor/fashion-spa-house-inc',
  'http://madeinbaltimore.org/vendor/ang-pottery',
  'http://madeinbaltimore.org/vendor/zekes-coffee',
  'http://madeinbaltimore.org/vendor/monkey-in-the-metal',
  'http://madeinbaltimore.org/vendor/mark-supik-co-woodurning',
  'http://madeinbaltimore.org/vendor/american-sugar-refining-inc-domino-sugar',
  'http://madeinbaltimore.org/vendor/union-craft-brewing',
  'http://madeinbaltimore.org/vendor/sassycyclist',
  'http://madeinbaltimore.org/vendor/local-color-flowers',
  'http://madeinbaltimore.org/vendor/open-works',
  'http://madeinbaltimore.org/vendor/baltimore-print-studios',
  'http://madeinbaltimore.org/vendor/brick-board',
  'http://madeinbaltimore.org/vendor/station-north-tool-library',
  'http://madeinbaltimore.org/vendor/sandtown-millworks',
  'http://madeinbaltimore.org/vendor/oyin-handmade',
  'http://madeinbaltimore.org/vendor/write-notepads-and-co',
  'http://madeinbaltimore.org/vendor/cedar-and-cotton'
];

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

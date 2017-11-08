/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// FS is a built in module to node that let's us read files from the system we're running on
// const fs = require('fs');

// // moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
// exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = obj => JSON.stringify(obj, null, 2);

// // Making a static map is really long - this is a handy helper function to make one
// exports.staticMap = ([lng, lat]) =>
//   `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process
//     .env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

// // inserting an SVG
// exports.icon = name => fs.readFileSync(`./public/images/icons/${name}.svg`);

// Some details about the site
exports.siteName = `Staff Directory`;

//- - function colorDice() {
//-     const classes = ['grab0', 'grab1', 'grab2'];
//-     function roll(min, max) {
//-       min = Math.ceil(min);
//-       max = Math.floor(max);
//-       return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//-     };
//-     return classes[roll(0, classes.length)];
//-   }
exports.colors = [
  '#0093e9',
  '#ff2525',
  '#85ffbd',
  '#fffb7d',
  '#21d4fd',
  '#b721ff',
  '#4158d0',
  '#ff6a88',
  '#ffe32c',
  '#b6df35',
  '#fa8bff',
  '#2bff88',
  '#FC00FF',
  '#48ded4',
  '#e82c75',
  '#ffc40e',
  '#00A26B'
];

exports.rand = {
  color: arrOfColors =>
    arrOfColors[Math.floor(Math.random() * (arrOfColors.length - 0)) + 0],
  num: (min, max) => Math.floor(Math.random() * (max - min)) + min
};

const gradients = [
  'linear-gradient(to left, #085078, #85D8CE);',
  'linear-gradient(to left, #4776E6, #8E54E9);',
  'linear-gradient(to left, #614385, #516395);',
  'linear-gradient(to left, #FF8008, #FFC837);',
  'linear-gradient(to left, #1D976C, #93F9B9);',
  'linear-gradient(to left, #EB3349, #F45C43);',
  'linear-gradient(to left, #DD5E89, #F7BB97);',
  'linear-gradient(to left, #4CB8C4, #3CD3AD);',
  'linear-gradient(to left, #1FA2FF, #12D8FA, #A6FFCB);',
  'linear-gradient(to left, #ff512f, #f09819);',
  'linear-gradient(to left, #26d0ce, #1a2980);',
  'linear-gradient(to left, #AA076B, #61045F);',
  'linear-gradient(to left, #ff512f, #dd2476);',
  'linear-gradient(to left, #f09819, #edde5d);',
  'linear-gradient(to left, #e55d87, #5fc3e4);',
  'linear-gradient(to left, #7AA1D2, #DBD4B4, #CC95C0);',
  'linear-gradient(to left, #3ca55c, #b5ac49);',
  'linear-gradient(to left, #348f50, #56b4d3);',
  'linear-gradient(to left, #da22ff, #9733ee);',
  'linear-gradient(to left, #02aab0, #00cdac);',
  'linear-gradient(to left, #ede574, #e1f5c4);',
  'linear-gradient(to left, #d31027, #ea384d);',
  'linear-gradient(to left, #16a085, #f4d03f);',
  'linear-gradient(to left, #77a1d3, #79cbca, #e684ae);',
  'linear-gradient(to left, #e65c00, #f9d423);',
  'linear-gradient(to left, #2193b0, #6dd5ed);',
  'linear-gradient(to left, #cc2b5e, #753a88);',
  'linear-gradient(to left, #ec008c, #fc6767);',
  'linear-gradient(to left, #1488cc, #2b32b2);',
  'linear-gradient(to left, #acb6e5, #86fde8);',
  'linear-gradient(to left, #ffe259, #ffa751);',
  'linear-gradient(to left, #40e0d0, #ff8c00, #ff0080);',
  'linear-gradient(to left, #11998e, #38ef7d);',
  'linear-gradient(to left, #108dc7, #ef8e38);',
  'linear-gradient(to left, #fc5c7d, #6a82fb);',
  'linear-gradient(to left, #00b09b, #96c93d);',
  'linear-gradient(to left, #800080, #ffc0cb);',
  'linear-gradient(to left, #fc4a1a, #f7b733);',
  'linear-gradient(to left, #74ebd5, #acb6e5);',
  'linear-gradient(to left, #7303c0, #fdeff9, #ec38bc);',
  'linear-gradient(to left, #667db6, #0082c8, #0082c8, #667db6);',
  'linear-gradient(to left, #22c1c3, #fdbb2d);',
  'linear-gradient(to left, #ff9966, #ff5e62);',
  'linear-gradient(to left, #7f00ff, #e100ff);',
  'linear-gradient(to left, #0cebeb, #20e3b2, #29ffc6);',
  'linear-gradient(to left, #36d1dc, #5b86e5);',
  'linear-gradient(to left, #cb356b, #bd3f32);',
  'linear-gradient(to left, #c0392b, #8e44ad);',
  'linear-gradient(to left, #007991, #78ffd6);',
  'linear-gradient(to left, #56ccf2, #2f80ed);',
  'linear-gradient(to left, #f2994a, #f2c94c);',
  'linear-gradient(to left, #e44d26, #f16529);',
  'linear-gradient(to left, #4ac29a, #bdfff3);',
  'linear-gradient(to left, #b2fefa, #0ed2f7);',
  'linear-gradient(to left, #30e8bf, #ff8235);',
  'linear-gradient(to left, #d66d75, #e29587);',
  'linear-gradient(to left, #f7971e, #ffd200);',
  'linear-gradient(to left, #43c6ac, #f8ffae);',
  'linear-gradient(to left, #dce35b, #45b649);',
  'linear-gradient(to left, #c0c0aa, #1cefff);',
  'linear-gradient(to left, #3494e6, #ec6ead);',
  'linear-gradient(to left, #67b26f, #4ca2cd);',
  'linear-gradient(to left, #ee0979, #ff6a00);',
  'linear-gradient(to left, #f4c4f3, #fc67fa);',
  'linear-gradient(to left, #00c3ff, #ffff1c);',
  'linear-gradient(to left, #ff7e5f, #feb47b);',
  'linear-gradient(to left, #fffc00, #ffffff);',
  'linear-gradient(to left, #ef32d9, #89fffd);',
  'linear-gradient(to left, #a80077, #66ff00);'
];

ranNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

exports.randGradient = () => gradients[ranNum(0, gradients.length)];

exports.gradientsArr = gradients;

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
// exports.menu = [
//   { slug: '/stores', title: 'Stores', icon: 'store' },
//   { slug: '/tags', title: 'Tags', icon: 'tag' },
//   { slug: '/top', title: 'Top', icon: 'top' },
//   { slug: '/add', title: 'Add', icon: 'add' },
//   { slug: '/map', title: 'Map', icon: 'map' }
// ];

const mongoose = require('mongoose');
const Vendor = mongoose.model('Vendor');

exports.homePage = (req, res) => {
  res.render('layout');
};

exports.addVendor = (req, res) => {
  res.render('addVendor', { title: 'Add vendor' });
};

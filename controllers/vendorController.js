const mongoose = require('mongoose');
const Vendor = mongoose.model('Vendor');

exports.homePage = (req, res) => {
  res.render('layout');
};

exports.addVendor = (req, res) => {
  res.render('addVendor', { title: 'Add vendor' });
};

exports.createVendor = (req, res) => {
  res.send(req.body);
  // const vendor = new Vendor(req.body);
  // await vendor.save();
  // // req.flash('success', 'Vendor saved successfully!');
  // res.redirect('/');
};

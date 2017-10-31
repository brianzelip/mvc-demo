const mongoose = require('mongoose');
const Vendor = mongoose.model('Vendor');

exports.homePage = (req, res) => {
  res.render('layout');
};

exports.addVendor = (req, res) => {
  res.render('editVendor', { title: 'Add vendor' });
};

exports.createVendor = async (req, res) => {
  // res.send(req.body);
  const vendor = new Vendor(req.body);
  await vendor.save();
  // req.flash('success', 'Vendor saved successfully!');
  res.redirect('/');
};

exports.getVendors = (req, res) => {
  res.render('vendors', { title: 'Vendors' });
};

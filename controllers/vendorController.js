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
  res.redirect('/add');
};

exports.getVendors = async (req, res) => {
  const vendors = await Vendor.find();
  res.render('vendors', { title: 'Vendors', vendors });
};

exports.editVendor = async (req, res) => {
  // 1. Find the store given the id parameter of the url (ie: `req.params.id`)
  const vendor = await Vendor.findOne({ _id: req.params.id });
  // 2. Render out the edit form so the user can update the vendor data
  res.render('editVendor', { title: `Edit ${vendor.vendorName}`, vendor });
};

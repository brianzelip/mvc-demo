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
  // 1. Find the vendor given the id parameter of the url (ie: `req.params.id`)
  const vendor = await Vendor.findOne({ _id: req.params.id });
  // 2. Render out the edit form so the user can update the vendor data
  res.render('editVendor', { title: `Edit ${vendor.vendorName}`, vendor });
};

exports.updateVendor = async (req, res) => {
  // 1. find and update the vendor
  const vendor = await Vendor.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true, //tells findOneAndUpdate to return the new vendor that was
      //just edited, not the old vendor like what it returns by default
      runValidators: true //tells findOneAndUpdate to run any required statements
      // on the form schema in the data model; ie in this case, the vendor name is
      // required so if someone submits an edit that removes the vendor name,
      // this option will run the validator to catch that problem (plus the trims)
    }
  ).exec(); //tells mongoose explicitly to run this query
  req.flash(
    'success',
    `Successfully updated <strong>${vendor.vendorName}</strong>! <a href="/vendors/${vendor.slug}">Go to ${vendor.vendorName} →</a>`
  );
  res.redirect(`/vendors/${vendor.id}/edit`);
  // 2. Redirect them to the vendor and flash them it worked
};

exports.getVendor = async (req, res) => {
  const vendor = await Vendor.findOne({ slug: req.params.slug });
  res.render('vendor', { title: `${vendor.vendorName}`, vendor });
};

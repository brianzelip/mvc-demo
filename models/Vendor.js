const mongoose = require('mongoose');
// have to tell mongoose that we're using ES6 async/await
mongoose.Promise = global.Promise;
const slug = require('slugs');

const vendorSchema = new mongoose.Schema(
  {
    vendorName: {
      type: String,
      trim: true,
      required: 'You must enter a vendor name!'
    },
    // vendorType: {
    //   type: String,
    //   required: 'You must select a vendor type!'
    // },
    vendorUrl: {
      type: String,
      trim: true
    },
    vendorDescription: String,
    twitterUrl: {
      type: String,
      trim: true
    },
    facebookUrl: {
      type: String,
      trim: true
    },
    instagramUrl: {
      type: String,
      trim: true
    },
    etsyUrl: {
      type: String,
      trim: true
    },
    slug: String
  },
  {
    timestamps: true
  }
);

vendorSchema.pre('save', function(next) {
  if (!this.isModified('vendorName')) {
    next(); // skip it
    return; // stop this function from running
    // the above two lines could also be written as:
    // `return next();`.
    //
    // also, `isModified()` is a Mongoose method
  }
  this.slug = slug(this.vendorName);
  // TODO make this more resilient so slugs are unique
  next();
}); // needs to be a long-form function because we need `this`, so arrow func won't do

module.exports = mongoose.model('Vendor', vendorSchema);

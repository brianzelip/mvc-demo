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

// vendorSchema.pre('save', function(next) {
//   this.timeStamp = Date.now();
//   next();
// }); // needs to be a long-form function because we need `this`, so arrow func won't do
// keeping this function around to show my future self how to insert a pre('save')

module.exports = mongoose.model('Vendor', vendorSchema);

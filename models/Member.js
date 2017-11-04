const mongoose = require('mongoose');
// have to tell mongoose that we're using ES6 async/await
mongoose.Promise = global.Promise;
const slug = require('slugs');

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'You must enter a member name!'
    },
    //TODO - make first and last name fields!
    //
    // vendorType: {
    //   type: String,
    //   required: 'You must select a vendor type!'
    // },
    url: {
      type: String,
      trim: true
    },
    bio: String,
    twitterUrl: {
      type: String,
      trim: true
    },
    githubUrl: {
      type: String,
      trim: true
    },
    instagramUrl: {
      type: String,
      trim: true
    },
    slug: String
  },
  {
    timestamps: true
  }
);

memberSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    next(); // skip it
    return; // stop this function from running
    // the above two lines could also be written as:
    // `return next();`.
    //
    // also, `isModified()` is a Mongoose method
  }
  this.slug = slug(this.name);
  // TODO make this more resilient so slugs are unique
  next();
}); // needs to be a long-form function because we need `this`, so arrow func won't do

module.exports = mongoose.model('Member', memberSchema);

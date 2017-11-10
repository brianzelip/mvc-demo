const mongoose = require('mongoose');
// have to tell mongoose that we're using ES6 async/await
mongoose.Promise = global.Promise;
const slug = require('slugs');

const memberSchema = new mongoose.Schema(
  {
    nameFirst: {
      type: String,
      trim: true,
      required: 'You must enter a first name!'
    },
    nameLast: {
      type: String,
      trim: true,
      required: 'You must enter a last name!'
    },
    nameFull: String,
    title: {
      type: String,
      trim: true,
      required: 'You must enter a title!'
    },
    bio: String,
    email: {
      type: String,
      trim: true
    },
    twitterUrl: {
      type: String,
      trim: true
    },
    githubUrl: {
      type: String,
      trim: true
    },
    linkedinUrl: {
      type: String,
      trim: true
    },
    dribbbleUrl: {
      type: String,
      trim: true
    },
    skills: [String],
    photoFull: String,
    photoSquare: String,
    slug: String
  },
  {
    timestamps: true
  }
);

memberSchema.pre('save', function(next) {
  if (!this.isModified('nameFirst') && !this.isModified('nameLast')) {
    next(); // skip it
    return; // stop this function from running
    // the above two lines could also be written as:
    // `return next();`.
    //
    // also, `isModified()` is a Mongoose method
  }
  this.nameFull = `${this.nameFirst} ${this.nameLast}`;
  // TODO make this more resilient so slugs are unique
  next();
}); // needs to be a long-form function because we need `this`, so arrow func won't do

memberSchema.pre('save', function(next) {
  if (!this.isModified('nameFirst') && !this.isModified('nameLast')) {
    next(); // skip it
    return;
  }
  this.slug = slug(`${this.nameFirst} ${this.nameLast}`);
  // TODO make this more resilient so slugs are unique
  next();
}); // needs to be a long-form function because we need `this`, so arrow func won't do

module.exports = mongoose.model('Member', memberSchema);

const mongoose = require('mongoose');
const Member = mongoose.model('Member');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');
const slug = require('slugs');

const multerOptions = {
  storage: multer.memoryStorage(), // store file into memory instead of to disk, we will save the resized file to disk later
  fileFilter(req, file, next) {
    // next is being used as a variable name above for the callback function multer expects, ie: this isn't an express misddleware thing, but since we're in the express env, calling the callback next() in this context makes sense.
    const isPhoto = file.mimetype.startsWith('image/');
    if (isPhoto) {
      next(null, true);
      // null = no message to pass
      // true = move along to the next function
    } else {
      next({ message: "That filetype is't allowed!" }, true);
      // message = message
      // false = don't move along to the next fn, something's wrong!
    }
  }
};

exports.addMember = (req, res) => {
  res.render('editMember', { title: 'Add member' });
};

exports.createMember = async (req, res) => {
  // res.send(req.body);
  const member = new Member(req.body);
  await member.save();
  // req.flash('success', 'Member saved successfully!');
  res.redirect('/staff/add');
};

exports.getStaff = async (req, res) => {
  const staff = await Member.find();
  res.render('staff', { title: 'Staff', staff });
};

exports.editMember = async (req, res) => {
  // 1. Find the member given the slug parameter of the url (ie: `req.params.id`)
  const member = await Member.findOne({ _id: req.params.id });
  // 2. Render out the edit form so the user can update the member data
  res.render('editMember', { title: `Edit ${member.fullName}`, member });
};

exports.updateMember = async (req, res) => {
  // 1. set the fullName since the update doesn't automatically
  // re-initiate the pre('save') from the model
  req.body.fullName = `${req.body.nameFirst} ${req.body.nameLast}`;
  req.body.slug = slug(`${req.body.nameFirst} ${req.body.nameLast}`);
  // 2. find and update the member
  const member = await Member.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true, //tells findOneAndUpdate to return the new member that was
      //just edited, not the old member like what it returns by default
      runValidators: true //tells findOneAndUpdate to run any required statements
      // on the form schema in the data model; ie in this case, the member name is
      // required so if someone submits an edit that removes the member name,
      // this option will run the validator to catch that problem (plus the trims)
    }
  ).exec(); //tells mongoose explicitly to run this query
  // 3. Redirect them to the member and flash them it worked
  req.flash(
    'success',
    `Successfully updated <strong>${member.fullName}</strong>! <a href="/staff/${member._id}">Go to ${member.fullName} →</a>`
  );
  res.redirect(`/staff/${member._id}/edit`);
};

exports.getMember = async (req, res) => {
  const member = await Member.findOne({ slug: req.params.slug });
  res.render('member', { title: `${member.fullName}`, member });
};

exports.upload = multer(multerOptions).single('photo');

exports.resize = async (req, res, next) => {
  // 1. make sure a file to resize actually exists
  if (!req.file) {
    next();
    return;
  }
  const extension = req.file.mimetype.split('/')[1];
  req.body.photo = `${uuid.v4()}.${extension}`;
  // req.body.photo here because, we create the Store obj from the req.body as in the createStore controller above, so here we are attaching a new property called photo where we will pass the view the path to the photo to render!

  // now we resize the photo
  const photo = await jimp.read(req.file.buffer);
  await photo.resize(800, 800);
  await photo.write(`./public/uploads/${req.body.photo}`);

  // once we have written the photo to our file system, keep going!
  next();
}; // this is middleware, we will get the photo, edit and save it, then pass it to the edit store controller

exports.test = (req, res) => {
  res.render('test', { title: 'TESTING' });
};

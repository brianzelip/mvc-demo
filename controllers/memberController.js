const mongoose = require('mongoose');
const Member = mongoose.model('Member');

exports.homePage = (req, res) => {
  res.render('layout');
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
  const member = await Member.findOne({ slug: req.params.slug });
  // 2. Render out the edit form so the user can update the member data
  res.render('editMember', { title: `Edit ${member.name}`, member });
};

exports.updateMember = async (req, res) => {
  // 1. find and update the member
  const member = await Member.findOneAndUpdate(
    { slug: req.params.slug },
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
  req.flash(
    'success',
    `Successfully updated <strong>${member.name}</strong>! <a href="/staff/${member.slug}">Go to ${member.name} →</a>`
  );
  res.redirect(`/staff/${member.slug}/edit`);
  // 2. Redirect them to the member and flash them it worked
};

exports.getMember = async (req, res) => {
  const member = await Member.findOne({ slug: req.params.slug });
  res.render('member', { title: `${member.name}`, member });
};

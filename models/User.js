const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required:true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  AreaOfExpertise: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

const mongoose = require('mongoose');

const ProblemStatusSchema = new mongoose.Schema({
  problemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true },
  title:{type:String,required:true},
  status: { type: String, enum: ['Accepted', 'Not Accepted'], required: true },
  submittedAt: { type: Date, default: Date.now }
});

const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  username: { type: String, required: true },
  age: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String }, // URL to the user's profile picture
  bio: { type: String },
  problemsSolved: [ProblemStatusSchema],
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now }
},{timestamps:true});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;

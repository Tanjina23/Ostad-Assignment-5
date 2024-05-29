const User = require("../models/UserModel");
const Profile = require("../models/ProfileModel");

// Controller to get OTP for user
exports.getUserOTP = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(400).send({ error: "User not found." });
    }
    // Assuming the OTP is sent via email or SMS
    res.status(200).send({ otp: user.otp });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to verify login
exports.verifyLogin = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.params.email,
      otp: req.params.otp,
    });
    if (!user) {
      return res.status(400).send({ error: "Invalid OTP." });
    }
    // Generate JWT token
    const token = jwt.sign({ _id: user._id }, "your_jwt_secret");
    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to logout user
exports.userLogout = (req, res) => {
  // Assuming we invalidate the token on the client side
  res.status(200).send({ message: "User logged out successfully." });
};

// Controller to create a new profile
exports.createProfile = async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to update an existing profile
exports.updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      { userID: req.body.userID },
      req.body,
      { new: true }
    );
    if (!profile) {
      return res.status(404).send({ error: "Profile not found." });
    }
    res.status(200).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to read a user profile
exports.readProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userID: req.user._id });
    if (!profile) {
      return res.status(404).send({ error: "Profile not found." });
    }
    res.status(200).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
};

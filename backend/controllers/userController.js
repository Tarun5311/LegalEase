const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Lawyer = require("../models/lawyerModel");
const Appointment = require("../models/appointmentModel");
const flog = require("../log");

const getuser = async (req, res) => {
  var id = null;
  if (req.user != undefined) id = req.user.id;
  var logText = req.method + " " + req.originalUrl + " " + id + " ";

  try {
    const user = await User.findById(req.params.id).select("-password");
    flog(logText + "200");
    return res.send(user);
  } catch (error) {
    flog(logText + "500");
    res.status(500).send("Unable to get user");
  }
};

const getallusers = async (req, res) => {
  var id = null;
  if (req.user != undefined) id = req.user.id;
  var logText = req.method + " " + req.originalUrl + " " + id + " ";

  try {
    const users = await User.find()
      .find({ _id: { $ne: req.locals } })
      .select("-password");
    flog(logText + "200");
    return res.send(users);
  } catch (error) {
    flog(logText + "500");
    res.status(500).send("Unable to get all users");
  }
};

const login = async (req, res) => {
  var id = null;
  if (req.user != undefined) id = req.user.id;
  var logText = req.method + " " + req.originalUrl + " " + id + " ";

  try {
    const emailPresent = await User.findOne({ email: req.body.email });
    if (!emailPresent) {
    flog(logText + "400");
    return res.status(400).send("Incorrect credentials");
    }
    const verifyPass = await bcrypt.compare(
      req.body.password,
      emailPresent.password
    );
    if (!verifyPass) {
    flog(logText + "400");
    return res.status(400).send("Incorrect credentials");
    }
    const token = jwt.sign(
      { userId: emailPresent._id, isAdmin: emailPresent.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: "2 days",
      }
    );
    flog(logText + "201");
    return res.status(201).send({ msg: "User logged in successfully", token });
  } catch (error) {
    console.log(error)
    flog(logText + "500");
    res.status(500).send("Unable to login user");
  }
};

const register = async (req, res) => {
  var id = null;
  if (req.user != undefined) id = req.user.id;
  var logText = req.method + " " + req.originalUrl + " " + id + " ";

  try {
    const emailPresent = await User.findOne({ email: req.body.email });
    if (emailPresent) {
    flog(logText + "400");
    return res.status(400).send("Email already exists");
    }
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const user = await User({ ...req.body, password: hashedPass });
    const result = await user.save();
    if (!result) {
    flog(logText + "500");
    return res.status(500).send("Unable to register user");
    }
    flog(logText + "201");
    return res.status(201).send("User registered successfully");
  } catch (error) {
    console.log(error)
    flog(logText + "500");
    res.status(500).send("Unable to register user");
  }
};

const updateprofile = async (req, res) => {
  var id = null;
  if (req.user != undefined) id = req.user.id;
  var logText = req.method + " " + req.originalUrl + " " + id + " ";

  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const result = await User.findByIdAndUpdate(
      { _id: req.locals },
      { ...req.body, password: hashedPass }
    );
    if (!result) {
    flog(logText + "500");
    return res.status(500).send("Unable to update user");
    }
    flog(logText + "201");
    return res.status(201).send("User updated successfully");
  } catch (error) {
    flog(logText + "500");
    res.status(500).send("Unable to update user");
  }
};

const deleteuser = async (req, res) => {
  var id = null;
  if (req.user != undefined) id = req.user.id;
  var logText = req.method + " " + req.originalUrl + " " + id + " ";

  try {
    const result = await User.findByIdAndDelete(req.body.userId);
    const removeDoc = await Lawyer.findOneAndDelete({
      userId: req.body.userId,
    });
    const removeAppoint = await Appointment.findOneAndDelete({
      userId: req.body.userId,
    });
    flog(logText + "200");
    return res.send("User deleted successfully");
  } catch (error) {
    flog(logText + "500");
    res.status(500).send("Unable to delete user");
  }
};

module.exports = {
  getuser,
  getallusers,
  login,
  register,
  updateprofile,
  deleteuser,
};

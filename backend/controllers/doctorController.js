const Lawyer = require("../models/lawyerModel");
const User = require("../models/userModel");
const Notification = require("../models/notificationModel");
const Appointment = require("../models/appointmentModel");

const getalllawyers = async (req, res) => {
  try {
    let docs;
    if (!req.locals) {
      docs = await Lawyer.find({ isLawyer: true }).populate("userId");
      console.log(docs)
    } else {
      docs = await Lawyer.find({ isLawyer: true })
        .find({
          _id: { $ne: req.locals },
        })
        .populate("userId");
    }

    return res.send(docs);
  } catch (error) {
    console.log(error);
    res.status(500).send("Unable to get lawyers");
  }
};

const getnotlawyers = async (req, res) => {
  try {
    const docs = await Lawyer.find({ isLawyer: false })
      .find({
        _id: { $ne: req.locals },
      })
      .populate("userId");

    return res.send(docs);
  } catch (error) {
    res.status(500).send("Unable to get non lawyers");
  }
};

const applyforlawyer = async (req, res) => {
  try {
    const alreadyFound = await Lawyer.findOne({ userId: req.locals });
    if (alreadyFound) {
      return res.status(400).send("Application already exists");
    }

    const lawyer = Lawyer({ ...req.body.formDetails, userId: req.locals });
    const result = await lawyer.save();

    return res.status(201).send("Application submitted successfully");
  } catch (error) {
    res.status(500).send("Unable to submit application");
  }
};

const acceptlawyer = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.body.id },
      { isLawyer: true, status: "accepted" }
    );

    const lawyer = await Lawyer.findOneAndUpdate(
      { userId: req.body.id },
      { isLawyer: true }
    );

    const notification = await Notification({
      userId: req.body.id,
      content: `Congratulations, Your application has been accepted.`,
    });

    await notification.save();

    return res.status(201).send("Application accepted notification sent");
  } catch (error) {
    res.status(500).send("Error while sending notification");
  }
};

const rejectlawyer = async (req, res) => {
  try {
    const details = await User.findOneAndUpdate(
      { _id: req.body.id },
      { isLawyer: false, status: "rejected" }
    );
    const delDoc = await Lawyer.findOneAndDelete({ userId: req.body.id });

    const notification = await Notification({
      userId: req.body.id,
      content: `Sorry, Your application has been rejected.`,
    });

    await notification.save();

    return res.status(201).send("Application rejection notification sent");
  } catch (error) {
    res.status(500).send("Error while rejecting application");
  }
};

const deletelawyer = async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(req.body.userId, {
      isLawyer: false,
    });
    const removeDoc = await Lawyer.findOneAndDelete({
      userId: req.body.userId,
    });
    const removeAppoint = await Appointment.findOneAndDelete({
      userId: req.body.userId,
    });
    return res.send("Lawyer deleted successfully");
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Unable to delete lawyer");
  }
};

module.exports = {
  getalllawyers,
  getnotlawyers,
  deletelawyer,
  applyforlawyer,
  acceptlawyer,
  rejectlawyer,
};

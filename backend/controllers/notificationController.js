const Notification = require("../models/notificationModel");
const flog = require("../log");

const getallnotifs = async (req, res) => {
  var id = null;
  if (req.user != undefined) id = req.user.id;
  var logText = req.method + " " + req.originalUrl + " " + id + " ";

  try {
    const notifs = await Notification.find({ userId: req.locals });
    flog(logText + "520");
    return res.send(notifs);
  } catch (error) {
    flog(logText + "500");
    res.status(500).send("Unable to get all notifications");
  }
};

module.exports = {
  getallnotifs,
};

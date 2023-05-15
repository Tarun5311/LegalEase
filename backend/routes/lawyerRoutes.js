const express = require("express");
const lawyerController = require("../controllers/lawyerController");
const auth = require("../middleware/auth");

const lawyerRouter = express.Router();

lawyerRouter.get("/getalllawyers", lawyerController.getalllawyers);

lawyerRouter.get("/getnotlawyers", auth, lawyerController.getnotlawyers);

lawyerRouter.post("/applyforlawyer", auth, lawyerController.applyforlawyer);

lawyerRouter.put("/deletelawyer", auth, lawyerController.deletelawyer);

lawyerRouter.put("/acceptlawyer", auth, lawyerController.acceptlawyer);

lawyerRouter.put("/rejectlawyer", auth, lawyerController.rejectlawyer);

module.exports = lawyerRouter;

const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    isLawyer: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Lawyer = mongoose.model("Lawyer", schema);

module.exports = Lawyer;

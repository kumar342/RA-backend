const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const ReadyAssistUserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      unique: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    isActive: {
      type: String,
    },
  },
  { timestamps: true }
);
ReadyAssistUserSchema.plugin(uniqueValidator);
const ReadyAssistUser = mongoose.model(
  "readyassistuser",
  ReadyAssistUserSchema
);
module.exports = ReadyAssistUser;

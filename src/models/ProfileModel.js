const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  cus_add: { type: String, required: true },
  cus_city: { type: String, required: true },
  cus_country: { type: String, required: true },
  cus_fax: { type: String },
  cus_name: { type: String, required: true },
  cus_phone: { type: String, required: true },
  cus_postcode: { type: String, required: true },
  cus_state: { type: String, required: true },
  ship_add: { type: String, required: true },
  ship_city: { type: String, required: true },
  ship_country: { type: String, required: true },
  ship_name: { type: String, required: true },
  ship_phone: { type: String, required: true },
  ship_postcode: { type: String, required: true },
  ship_state: { type: String, required: true },
});

module.exports = mongoose.model("Profile", ProfileSchema);

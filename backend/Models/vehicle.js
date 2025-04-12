const mongoose = require("mongoose");
const Vehicle = require("./vehicle");

const VehicleSchema = new mongoose.Schema({
  vehicleType: { type: String, required: true },
  vehicleName: { type: String, required: true },
  vehicleUse: { type: String, required: true },
  vehicleYear: { type: Number, required: true },
  otherDetails: { type: String },
  priceDay: { type: Number, required: true },
  priceHour: { type: Number, required: true }, 
  isAvailable: { type: Boolean, default: true },
  vehicleImages: [
    {
      data: Buffer,
      contentType: String,
    },
  ],
});

// Specify the collection name as 'VehicleListings'
module.exports = mongoose.model("Vehicle", VehicleSchema, "VehicleListings");

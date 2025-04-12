const mongoose = require("mongoose");
const multer = require("multer"); // إضافة multer
const Vehicle = require("../Models/vehicle");

// إنشاء مركبة جديدة
const createVehicle = async (req, res) => {
  try {
    // التحقق من وجود صور مرفوعة
    if (!req.files || !req.files.vehicleImages) {
      return res.status(400).json({ message: "No vehicle images uploaded." });
    }

    // التحقق من خطأ رفع الملفات
    if (req.fileValidationError) {
      return res.status(400).json({ message: req.fileValidationError });
    }

    const {
      vehicleType,
      vehicleName, 
      vehicleUse,
      vehicleYear,
      otherDetails,
      priceDay,
      priceHour,
    } = req.body;

    // التحقق من القيم المطلوبة
    if (!vehicleType || !vehicleName || !vehicleYear || !priceDay || !priceHour) {
      return res.status(400).json({ message: "Please provide all required fields." });
    }

    //إنشاء كائن المعده
    const newVehicle = new Vehicle({
      vehicleType,
      vehicleName,
      vehicleUse,
      vehicleYear,
      otherDetails,
      priceHour, 
      priceDay,
      vehicleImages: req.files.vehicleImages
        ? req.files.vehicleImages.map((file) => ({
            data: file.buffer,
            contentType: file.mimetype,
          }))
        : [], // تجنب الخطأ إذا لم تكن هناك صور
    });

    await newVehicle.save();
    res.status(201).json({ message: "Vehicle listed successfully!" });
  } catch (error) {
    console.error("Error listing vehicle:", error);

    // التحقق من خطأ multer
    if (error instanceof multer.MulterError) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Failed to list vehicle", error: error.message });
    }
  }
};

// جلب جميع المركبات
const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({});
    
    // تحويل الصور إلى base64
    const vehiclesWithBase64Images = vehicles.map((vehicle) => ({
      ...vehicle.toObject(),
      vehicleImages: vehicle.vehicleImages.map((image) => ({
        contentType: image.contentType,
        data: image.data.toString("base64"),
      })),
    }));

    res.status(200).json(vehiclesWithBase64Images);
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res.status(500).json({ message: "Failed to fetch vehicles", error: error.message });
  }
};

// جلب مركبة واحدة حسب ID
const getVehicleById = async (req, res) => {
  try {
    const { id } = req.params;

    // التحقق من صحة الـ ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid vehicle ID." });
    }

    const vehicle = await Vehicle.findById(id);

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found." });
    }

    // تحويل الصور إلى base64
    const vehicleWithBase64Images = {
      ...vehicle.toObject(),
      vehicleImages: vehicle.vehicleImages.map((image) => ({
        contentType: image.contentType,
        data: image.data.toString("base64"),
      })),
    };

    res.status(200).json(vehicleWithBase64Images);
  } catch (error) {
    console.error("Error fetching vehicle:", error);
    res.status(500).json({ message: "Error fetching vehicle", error: error.message });
  }
};

// تأجير المركبة (جعلها غير متاحة)
const rentVehicle = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid vehicle ID." });
    }

    const vehicle = await Vehicle.findByIdAndUpdate(
      id,
      { isAvailable: false },
      { new: true }
    );

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found." });
    }

    res.status(200).json({ message: "Vehicle rented successfully", vehicle });
  } catch (error) {
    console.error("Error renting vehicle:", error);
    res.status(500).json({ message: "Error renting vehicle", error: error.message });
  }
};

module.exports = { createVehicle, getVehicles, getVehicleById, rentVehicle };


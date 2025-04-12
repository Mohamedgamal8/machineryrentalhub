const multer = require("multer");

// Define allowed file types
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only PNG, JPG, and JPEG are allowed."), false);
  }
};

// Use memory storage for multer (change to diskStorage if needed)
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
});

const uploadVehicleMiddleware = (req, res, next) => {
  upload.fields([{ name: "vehicleImages", maxCount: 4 }])(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });
};

module.exports = uploadVehicleMiddleware;

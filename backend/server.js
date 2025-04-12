const express = require("express");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const VehicleRouter = require("./Routes/VehicleRouter");
const OwnerRouter = require("./Routes/ownerRoutes");

require("dotenv").config();
require("./Models/database");

const PORT = process.env.PORT || 8080;
const app = express();

// Allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://machineryrentals.vercel.app" // حط هنا الدومين بتاع الفرونت لو هتستخدم واحد تاني
];

app.use(express.json());

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

// Add routes
app.use("/auth", AuthRouter);
app.use("/api/vehicles", VehicleRouter);
app.use("/owner", OwnerRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Machinery Rentals Hub!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

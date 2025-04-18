const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_CONN;

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("MongoDB Connected SUCCESSFULLY to Machinery Rentals Hub... ");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error: ", err);
  });

const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://root:example@localhost:27017/testdb?authSource=admin";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB conectado...");
  } catch (err) {
    console.error("Error conectando a MongoDB:", err);
    process.exit(1);
  }
};

module.exports = connectDB;

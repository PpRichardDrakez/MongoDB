require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
app.use("/api/users", require("./routes/userRoutes"));

const app = express();
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

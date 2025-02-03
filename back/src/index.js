import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use("/api/users", userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
  connectDB();
});

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

import adminRoutes from "./routes/admin.route.js";
import userRoutes from "./routes/user.route.js";
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albuns", albumRoutes);

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
  connectDB();
});

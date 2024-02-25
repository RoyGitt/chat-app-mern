import express from "express";
import dotenv from "dotenv";
import { connectToDb } from "./config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  connectToDb();
  console.log(`Server running at PORT ${PORT}`);
});

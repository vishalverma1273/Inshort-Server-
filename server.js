import express, { Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";

const app = express();
dotenv.config();
app.use(cors());
app.use("/", Route);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL =
  process.env.MONGODB_URI ||
  `mongodb+srv://${username}:${password}@cluster0.3il5wgn.mongodb.net/`;
Connection(URL);
app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
DefaultData();

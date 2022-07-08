import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello, world!" });
});

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});

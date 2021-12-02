import express from "express";
import bcrypt from "bcrypt-nodejs";
import cors from "cors";
import knex from "knex";

import handleRegister from "./controllers/register.js";
import handleSignin from "./controllers/signin.js";
import handleProfile from "./controllers/profile.js";
import handleImage from "./controllers/image.js";
import handleApiCall from "./controllers/imageUrl.js";

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "@hmaD8261",
    database: "smart_brain",
  },
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("it is working!");
});

app.post("/signin", (req, res) => {
  handleSignin(req, res, db, bcrypt);
});

app.post("/register", (req, res) => {
  handleRegister(req, res, db, bcrypt);
});

app.get("/profile/:id", (req, res) => {
  handleProfile(req, res, db);
});

app.put("/image", (req, res) => {
  handleImage(req, res, db);
});

app.post("/imageUrl", (req, res) => {
  handleApiCall(req, res);
});

app.listen(process.env.PORT, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});

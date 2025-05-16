const express = require("express");
const JWT = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const SECRET = "S3CR3T";

const authJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    return JWT.verify(token, SECRET, (err, user) => {
      if (err) {
        res.send({ message: "Error while verifying token!!" });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.send({ message: "Error logging in !!" });
  }
};
const userSchema = mongoose.Schema({
  username: String,
  password: String,
});

const USERS = mongoose.model("Users", userSchema);

mongoose.connect("mongodb+srv://vaibhavm:0718@aniworld.hzcbsw4.mongodb.net/");

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const admin = await USERS.findOne({ username });
  if (!admin) {
    const newAdmin = new USERS({ username, password });
    const token = JWT.sign(username, SECRET);
    await newAdmin.save();
    res.send({ message: "Admin created successfully!!", token: token });
  } else {
    res.status(403).send({ message: "Admin already exists!!" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await USERS.findOne({ username, password });
  if (admin) {
    const token = JWT.sign(username, SECRET);
    res.send({ message: "Admin logged in successfully!!", token: token });
  } else {
    res.status(403).send({ message: "Incorrect username or password!! " });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

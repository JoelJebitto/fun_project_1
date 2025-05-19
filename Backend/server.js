const express = require("express");
const JWT = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const SECRET = "S3CR3T";

// Middleware to verify JWT
const authJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    JWT.verify(token, SECRET, (err, user) => {
      if (err) {
        return res
          .status(401)
          .send({ message: "Error while verifying token!!" });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "Authorization header missing!" });
  }
};

// Mongoose user model
const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const USERS = mongoose.model("Users", userSchema);

mongoose.connect("mongodb+srv://vaibhavm:0718@aniworld.hzcbsw4.mongodb.net/");

// Register route
app.post("/register", async (req, res) => {
  const { email, username, password } = req.body;
  const existingUser = await USERS.findOne({ username });
  if (!existingUser) {
    const newUser = new USERS({ username, email, password });
    const token = JWT.sign({ username }, SECRET);
    await newUser.save();
    res.send({ message: "Admin created successfully!!", token: token });
  } else {
    res.status(403).send({ message: "Username already exists!!" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await USERS.findOne({ username, password });
  if (user) {
    const token = JWT.sign({ username }, SECRET);
    res.send({ message: "Admin logged in successfully!!", token: token });
  } else {
    res.status(403).send({ message: "Incorrect username or password!!" });
  }
});

// Protected route
app.get("/utils/me", authJWT, (req, res) => {
  res.json({ username: req.user.username });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

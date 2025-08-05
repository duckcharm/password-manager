import "dotenv/config";

import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import { createServer } from "node:http";
import { User } from "./models/user";
import { sequelize, testDbConnection } from "./sequelize";

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const compareResult = await bcrypt.compare(password, user.passwordHash);
  if (!compareResult) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET!);

  res.json({ token });
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);
  await User.create({
    username,
    passwordHash,
  });

  res.status(201).json({ message: "User created" });
});

// TODO: create vault

const port = process.env.PORT || 3000;
testDbConnection().then(async () => {
  await sequelize.sync({ force: true });

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});

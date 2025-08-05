import "dotenv/config";
import express from "express";
import { createServer } from "node:http";
import { testDbConnection } from "./sequelize";

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = {
    username,
    password,
  };

  res.json({ user });
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  const user = {
    username,
    password,
  };

  res.status(201).json({ user });
});

const port = process.env.PORT || 3000;
testDbConnection().then(() => {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});

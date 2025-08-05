import express from "express";
import { createServer } from "node:http";

const app = express();
const server = createServer(app);

app.get("/ping", (req, res) => {
  res.send("pong");
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

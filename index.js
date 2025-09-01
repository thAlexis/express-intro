import { createServer } from "node:http";
import "dotenv/config";

import express from "express";

// const server = createServer((req, res) => {
//   res.end("Hello world");
// });

const app = express();

app.get("/", (req, res) => {
  res.end("GET : /");
});

app.post("/", (req, res) => {
  res.end("POST : /");
});

app.get("/personne", (req, res) => {
  res.end("GET : /personne");
});

app.get("/formation", (req, res) => {
  res.end("GET : /formation");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Adresse server : http://localhost:${PORT}`);
});

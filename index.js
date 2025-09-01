import { createServer } from "node:http";
import "dotenv/config";

import express from "express";

// const server = createServer((req, res) => {
//   res.end("Hello world");
// });

const app = express();

const m1 = (req, res, next) => {
  console.log("Middleware : m1");
  next();
};

const m2 = (req, res, next) => {
  console.log("Middleware : m2");
  next();
};

const m3 = (req, res) => {
  console.log("Middleware : m3");
};

app.get(
  "/",
  (req, res, next) => {
    console.log("GET : /");
    res.end("GET : /");
    next();
  }
  // [m2, m1]
);

// app.use(m1);

// app.use(m2);

// app.post("/", (req, res) => {
//   res.end("POST : /");
// });

// app.get("/personne", (req, res) => {
//   res.end("GET : /personne");
// });

// app.get("/formation", (req, res) => {
//   res.end("GET : /formation");
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Adresse server : http://localhost:${PORT}`);
});

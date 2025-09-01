import { createServer } from "node:http";
import "dotenv/config";

import express from "express";

// const server = createServer((req, res) => {
//   res.end("Hello world");
// });

const app = express();

app.get("/", (req, res) => {
  console.log("GET : /");
  res.end("GET : /");
});

// app.get(["/home", "/accueil"], (req, res) => {
//   console.log(`GET : ${req.url}`);
//   res.end(`GET : ${req.url}`);
// });

app
  .route(["/home", "/accueil"])
  .get((req, res) => {
    console.log(`GET : ${req.url}`);
    res.sendFile(import.meta.dirname + "/index.html");
  })
  .post((req, res) => {
    console.log(`POST : ${req.url}`);
    res.end(`POST : ${req.url}`);
  });

app.all("/personne", (req, res) => {
  console.log(`${req.method} : ${req.url}`);
  res.end(`${req.method} : ${req.url}`);
});

app.get("/adresse/:ville/:cp", (req, res) => {
  console.log(`${req.method} : ${res.url}`);
  res.end(`Ici c'est ${req.params["ville"]} - ${req.params.cp}`);
});

app.get("/adresse", (req, res) => {
  console.log(`${req.method} : ${res.url}`);
  res.end(`Ici c'est ${req.query["ville"]} - ${req.query.cp}`);
});

app.get("/calcul/:op", (req, res) => {
  let result = 0;
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  switch (req.params.op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
    case "*":
      result = a * b;
      break;
  }

  res.end(`Le resultat de ${a} ${req.params.op} ${b} est ${result}`);
});

// app.post(["/home", "/accueil"], (req, res) => {
//   console.log(`POST : ${req.url}`);
//   res.end(`POST : ${req.url}`);
// });

// middle pour les routes restantes, a placer en dernier
app.get("/*splat", (req, res) => {
  console.log("GET : la route demandée n'existe pas");
  res.status(404).type("json").json({
    Erreur: "La page demandée n'existe pas",
  });
  // res.sendStatus(404);
  // res.status(404).end("GET : La route demandée n'existe pas");
});

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

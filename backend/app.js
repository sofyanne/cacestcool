require("dotenv").config();
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const multer = require("./middleware/multer");

const globalRouter = require("./routes/globalRouter");
const postRouter = require("./routes/postRouter");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.json());
app.use(multer);
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(morgan("dev")); // Log serveur détaillés.

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next(); 
});


app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/", globalRouter);


// Les routes inconnues finiront ici, je créer une erreur et je la passe à mon prochain middleware avec next();
app.use((req, res, next) => {
  const error = new Error("La page n'existe pas.");
  error.status = 404;
  next(error);
});

// Configuration du code erreur et transmission de la réponse.
app.use((error, req, res) => {
  res.status(error.status || 500);
  res.end(error.message);
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASS}@cluster0.mypts.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connexion à la bdd réussie");
  }) // Ici si la connection ne s'etablie pas je capture l'erreur avec catch puisque mongoose.connect est une promise.
  .catch((error) =>
    console.log("La connexion à la base de données à échoué" + error)
  );


module.exports = app;
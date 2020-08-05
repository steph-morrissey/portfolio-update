// Requiring necessary npm packages
const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const router = require("./routes/html-routes");
// Setting up the PORT
const PORT = process.env.PORT || 8080;

const app = express();

const hbOptions = {
  defaultLayout: "main",
  layoutsDir: "src/views/layouts",
  partialsDir: "src/views/partials",
};
// Creating middleware needed for express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Declaring root to serve static pages
app.use(express.static("public"));

// Handlebars options
app.engine("handlebars", handlebars(hbOptions));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});

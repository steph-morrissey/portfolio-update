// Requiring necessary npm packages
const express = require("express");
const path = require("path");

// Setting up the PORT
const PORT = process.env.PORT || 8080;

const app = express();

// Creating middleware needed for express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Declaring root to serve static pages
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});

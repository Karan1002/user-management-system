require("dotenv").config();
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();

const port = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static files      html css js
app.use(express.static("public"));

//templating engine
app.use(expressEjsLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const locals = {
    title: "User Management System",
    description: "User Management System Node JS",
  };
  res.render("index", { locals });
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`App connect with port ${port}`);
});

require("dotenv").config();
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();

const port = 3000 || process.env.PORT;

const connectDB = require("./server/config/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static files      html css js
app.use(express.static("public"));

//templating engine
app.use(expressEjsLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

//home route path
app.use("/", require("./server/routes/customerRoutes"));

app.get("*", (req, res) => {
  res.render("404");
});

//connect DB
connectDB();

app.listen(port, () => {
  console.log(`App connect with port ${port}`);
});

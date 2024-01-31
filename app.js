require("dotenv").config();
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();

const port = 3000 || process.env.PORT;
const connectDB = require("./server/config/db");
//session
const session = require("express-session");
const flash = require("connect-flash");
// const { flash } = require("express-flash-message");

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);
//flash message

app.use(flash({ sessionKeyName: "flash message" }));

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

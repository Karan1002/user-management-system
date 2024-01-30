const express = require("express");

const router = express.Router();
const {
  homepage,
  addCustomer,
  postCustomer,
} = require("../controllers/customerController");

router.route("/").get(homepage);
router.route("/add").get(addCustomer);
router.route("/add").post(postCustomer);

module.exports = router;

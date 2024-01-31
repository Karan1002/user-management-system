const express = require("express");

const router = express.Router();
const {
  homepage,
  addCustomer,
  postCustomer,
  viewCustomerData,
  editCustomerData,
  editPostCustomerData,
  deleteCustomerData,
} = require("../controllers/customerController");

router.route("/").get(homepage);
router.route("/add").get(addCustomer);
router.route("/add").post(postCustomer);

router.route("/view/:id").get(viewCustomerData);

router.route("/edit/:id").get(editCustomerData);
router.route("/edit/:id").put(editPostCustomerData);

router.route("/edit/:id").delete(deleteCustomerData);

module.exports = router;

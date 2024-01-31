const multer = require("multer");
const customerModel = require("../models/customerModel");
const mongoose = require("mongoose");

const homepage = async (req, res) => {
  const messages = await req.flash("info");
  const locals = {
    title: "User Management System",
    description: "User Management System Node JS",
  };
  try {
    const customerData = await customerModel.find({}).limit(10);
    res.render("index", { locals, messages, customerData });
  } catch (error) {
    console.log(error);
  }
};

const addCustomer = async (req, res) => {
  const locals = {
    title: "Add New Customer",
    description: "User Management System Node JS",
  };
  res.render("customer/add", { locals });
};

const postCustomer = async (req, res) => {
  const newCustomer = new customerModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    tel: req.body.tel,
    email: req.body.email,
    details: req.body.details,
  });
  try {
    await customerModel.create(newCustomer);
    await req.flash("info", "New Customer has been added.");
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
module.exports = { homepage, addCustomer, postCustomer };

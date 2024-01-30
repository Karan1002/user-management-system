const homepage = async (req, res) => {
  const locals = {
    title: "User Management System",
    description: "User Management System Node JS",
  };
  res.render("index", { locals });
};

const addCustomer = async (req, res) => {
  const locals = {
    title: "Add New Customer",
    description: "User Management System Node JS",
  };
  res.render("customer/add", { locals });
};

const postCustomer = async (req, res) => {};
module.exports = { homepage, addCustomer, postCustomer };

const fs = require("fs");
const { validationResult } = require("express-validator");

let renderSite = (req, res) => {
  res.render("pages/register");
};

let usersController = {
  renderSite: renderSite,
};

module.exports = usersController;

const fs = require("fs");
const { validationResult } = require("express-validator");

let renderSite = (req, res) => {
  res.render("pages/register");
};

let registerUser = (req, res) => {
  let reqBody = express.json(req.body);

  console.log(reqBody);
};

let usersController = {
  renderSite: renderSite,
  registerUser: registerUser,
};

module.exports = usersController;

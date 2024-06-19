const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const tempUser = { name, email, password: hashedPassword };

  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json(user);
};

const login = async (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};

require("dotenv").config();
const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("please provide email id and password", 400);
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token: token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 400);
  }

  const token = authHeader.split(" "[1]);

  
};

module.exports = {
  login,
  dashboard,
};

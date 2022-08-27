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
  console.log(req.headers);
  const luckynumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello Siddhesh`,
    secret: `here is your authorized data ${luckynumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};

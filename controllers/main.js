const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("please provide email id and password", 400);
  }

  console.log(username, password);
  res.send("Fake Login/Register/Signup route");
};

const dashboard = async (req, res) => {
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

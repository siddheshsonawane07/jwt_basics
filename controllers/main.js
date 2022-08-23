const login = async (req, res) => {
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
  
const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const token = authorization.split(" ")[1];
    if (token) {
      try {
        console.log("token", token);
        const userInfo = await jwt.verify(token, "AnkeshJWT_SECRET");

        console.log("userInfo", userInfo);
        req.userInfo = userInfo;
        next();
      } catch (error) {
        return res.status(401).json({ message: "unauthorized" });
      }
    } else {
      return res.status(401).json({ message: "unauthorized" });
    }
  } else {
    return res.status(401).json({ message: "unauthorized" });
  }
};

module.exports = auth;

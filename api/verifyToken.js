const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWTSECRET_KEY, (err, user) => {
      if (err) res.status(401).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are Not Authenticated!");
  }
};

const verifyTokenAndAuth = (req, res, next) => {
  verify(req, res, () => {
    if (res.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not do that Oga!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verify(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not do that Oga!");
    }
  });
};

module.exports = { verify, verifyTokenAndAuth, verifyTokenAndAdmin };

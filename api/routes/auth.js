require("dotenv").config();
const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const mailgun = require("mailgun-js");
const DOMAIN = "mictokk.com";
const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN });

//REGISTER
router.post("/register", async (req, res) => {
  // const {username, email, password} = req.body;
  const name = req.body.name;
  const lastname = req.body.lastname;
  const username = req.body.username;
  const email = req.body.email;
  const isAdmin = req.body.isAdmin;
  const isDemo = req.body.isDemo;
  const password = CryptoJS.AES.encrypt(
    req.body.password,
    process.env.SECRET_KEY
  ).toString();

  await User.findOne({ email }).exec((err, user) => {
    if (user) {
      res.status(400).json({ error: "User with this email already exists" });
    }

    const token = jwt.sign(
      {
        name,
        lastname,
        username,
        email,
        password,
        isAdmin,
        isDemo,
      },
      process.env.JWT_ACC_ACTIVATION,
      { expiresIn: "10m" }
    );

    const data = {
      from: "noreply@domot.com.ng",
      to: email,
      subject: "Account Activation Link",
      html: `<h2>Please click on given link to activate your account</h2>
            <button>
            ${process.env.CLIENT_URL}/activate/${token}
            </button>`,
    };
    mg.messages().send(data, function (error, body) {
      if (error) {
        res.json({
          error: error.message,
        });
      }
      res.json({
        message: "Email has been sent, kindly activate your account!",
      });
    });
  });
});

//ACTIVATE
router.post("/email-activation", (req, res) => {
  const { token } = req.body;
  if (token) {
    jwt.verify(
      token,
      process.env.JWT_ACC_ACTIVATION,
      function (err, decodedToken) {
        if (err) {
          return res.status(400).json({ error: "Incorrect or Expired link " });
        }
        const { name, lastname, username, email, password, isAdmin, isDemo } =
          decodedToken;

        User.findOne({ email }).exec((err, user) => {
          if (user) {
            return res
              .status(400)
              .json({ error: "User with this email already exists" });
          }
          const newUser = new User({
            name,
            lastname,
            username,
            email,
            password,
            isAdmin,
            isDemo,
          });
          try {
            newUser.save();
            return res.json({
              message: "SignUp Successful",
            });
          } catch (err) {
            return res.status(500).json(err);
          }
        });
      }
    );
  } else {
    return res.json({ error: "Something went wrong!" });
  }
});

// //dummy db to store refresh token
// let refreshTokens = [];

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWTSECRET_KEY,
    { expiresIn: "60d" }
  );
};

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json("wrong password or username");
    }
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong password or username!");
    }

    //jwt token addition
    const accessToken = generateAccessToken(user);
    //refresh token addition
    // const refreshToken = generateRefreshToken(user);
    // refreshTokens.push(refreshToken);

    const { password, ...info } = user._doc;
    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

//FORGOET PASSWORD

router.put("/forgot-password", async (req, res) => {
  const { email } = req.body;

  await User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "this user not exists" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.RESET_PASSWORD_KEYS, {
      expiresIn: "10m",
    });

    const data = {
      from: "noreply@mictok.com",
      to: email,
      subject: "Password Reset Link",
      html: `<h2>Please click on given link to reset your password</h2>
            <button>
            <a href="${process.env.CLIENT_URL}/resetpassword/${token}"></a>
            </button>`,
    };
    return user.updateOne({ resetLink: token }, function (err, success) {
      if (err) {
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      } else {
        mg.messages().send(data, function (error, body) {
          if (error) {
            return res.json({
              error: error.message,
            });
          }
          return res.json({
            message: "Email has been sent, kindly reset your password!",
          });
        });
      }
    });
  });
});

//RESET PASSWORD
router.put("/reset-password", (req, res) => {
  const resetLink = req.body.resetLink;
  const newPass = CryptoJS.AES.encrypt(
    req.body.newPass,
    process.env.SECRET_KEY
  ).toString();
  if (resetLink) {
    jwt.verify(
      resetLink,
      process.env.RESET_PASSWORD_KEYS,
      function (error, decodedData) {
        if (error) {
          return res.status(401).json({
            error: "Incorrect token or It is expired!",
          });
        }
        User.findOne({ resetLink }, (err, user) => {
          if (err || !user) {
            return res
              .status(400)
              .json({ error: "user withthis token does not exists" });
          }

          const obj = {
            password: newPass,
          };
          user = _.extend(user, obj);
          user.save((err, result) => {
            if (err) {
              return res.status(400).json({ error: "reset password link" });
            } else {
              return res
                .status(200)
                .json({ message: "Your password has been changed" });
            }
          });
        });
      }
    );
  } else {
    return res.status(401).json({ error: "Authentication error!!" });
  }
});

module.exports = router;

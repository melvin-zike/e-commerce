require("dotenv").config();
const router = require("express").Router();
const User = require("../models/User");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const mailgun = require("mailgun-js");
const DOMAIN = "mictokk.com";
const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN });

//REGISTER
router.post("/buybook", async (req, res) => {
  const email = req.body.email;

  await User.findOne({ email }).exec((err, user) => {
    if (user) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    const token = jwt.sign(
      {
        email,
      },
      process.env.JWT_ACC_PIN,
      { expiresIn: "24h" }
    );

    const data = {
      from: "noreply@domot.com.ng",
      to: email,
      subject: "Account Activation Link",
      html: `<h2>Please click on given link to activate your account</h2>
              <p>
              ${process.env.CLIENT_URL}/download/${token}
              </p>`,
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

// /ACTIVATE
router.post("/pin-activation", (req, res) => {
  const { token } = req.body;
  if (token) {
    jwt.verify(token, process.env.JWT_ACC_PIN, function (err, decodedToken) {
      if (err) {
        return res.status(400).json({ error: "Incorrect or Expired link " });
      }
      const { email } = decodedToken;

      User.findOne({ email }).exec((err, user) => {
        if (user) {
          return res
            .status(400)
            .json({ error: "User with this email already exists" });
        }
        try {
          return res.json({
            message: "buy Successful",
          });
        } catch (err) {
          return res.status(500).json(err);
        }
      });
    });
  } else {
    return res.json({ error: "Something went wrong!" });
  }
});

module.exports = router;

const router = require("express").Router();
const {
  verify,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("../verifyToken");
const User = require("../models/User");

//UPDATE
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE Profile pic
router.put("/:id/updatepic", verifyTokenAndAuth, async (req, res) => {
  const newProfilePic = req.body.newProfilePic;
  const id = req.body.id;
  if (id === req.params.id || req.user.isAdmin) {
    try {
      await User.findById(id, (error, updatedUser) => {
        updatedUser.profilePic = newProfilePic;
        updatedUser.save();
        return res.status(200).json(updatedUser);
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json(" User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;
    return res.status(200).json(info);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL
router.get("/all", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(3)
      : await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//RANDOM USERS
router.get("/random-users", verify, async (req, res) => {
  let user;
  try {
    user = await User.aggregate([{ $sample: { size: 50 } }]);
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

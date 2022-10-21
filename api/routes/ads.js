const router = require("express").Router();
const Ads = require("../models/Ads");
const User = require("../models/User");
const {
  verify,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("../verifyToken");

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newAd = new Ads(req.body);
  try {
    const savedAd = await newAd.save();
    return res.status(201).json(savedAd);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Get Ads
router.get("/", async (req, res) => {
  try {
    const ads = await Ads.find().limit(10);
    res.status(200).json(ads.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedAd = await Ads.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedAd);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const ad = await Ads.findByIdAndDelete(req.params.id);
    if (req.user.isAdmin) {
      await ad.deleteOne();
      return res.status(200).json("Post deleted");
    } else {
      return res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/random", verifyTokenAndAdmin, async (req, res) => {
  let ad;
  try {
    ad = await Ads.aggregate([{ $sample: { size: 1 } }]);

    res.status(200).json(ad);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;

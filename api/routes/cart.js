const router = require("express").Router();
const {
  verify,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("../verifyToken");
const Cart = require("../models/Cart");

//Create

router.post("/", verify, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    return res.status(201).json(savedCart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json(" Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET user Cart
router.get("/find/:userid", verifyTokenAndAuth, async (req, res) => {
  try {
    const cart = await Cart.findByOne({ userId: req.params.userId });

    return res.status(200).json(cart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;

const router = require("express").Router();
const Product = require("../models/Product");
const {
  verify,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("../verifyToken");

//Create

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    return res.status(201).json(savedProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  if (req.body.id === req.params.id || req.user.isAdmin) {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json(" Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can delete only your account!");
  }
});

//GET
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/all", async (req, res) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;
  try {
    let products;

    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (queryCategory) {
      products = await Product.find({
        categories: {
          $in: [queryCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;

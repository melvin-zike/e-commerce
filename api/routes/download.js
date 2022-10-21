const router = require("express").Router();

router.get("/", (req, res) => {
  res.download("./Domot E-book.pdf");
});

module.exports = router;

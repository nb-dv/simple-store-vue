const Product = require("../models/Product");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qColor = req.query.color;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ price: -1 });
    } else if (qColor) {
      products = await Product.find({
        categories: {
          $in: [qColor],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const Order = require("../models/Order");
const createOrder = async (req, res) => {
  try {
    const order = new Order({
      items: req.body.items,
      total: req.body.total,
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createOrder,
};

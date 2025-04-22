const MenuItem = require("../models/MenuItems");
const getMenu = async (req, res) => {
  try {
    const menuItems = await MenuItem.find().sort({ category: 1 });
    const categorized = menuItems.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});
    res.json(categorized);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getMenu };

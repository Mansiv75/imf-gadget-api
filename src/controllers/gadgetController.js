const { Gadget } = require("../models");

exports.getAllGadgets = async (req, res) => {
  try {
    const gadgets = await Gadget.findAll();
    res.json(gadgets);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gadgets" });
  }
};

exports.addGadget = async (req, res) => {
  const { name, status } = req.body;
  try {
    const gadget = await Gadget.create({ name, status });
    res.status(201).json(gadget);
  } catch (error) {
    res.status(500).json({ error: "Failed to add gadget" });
  }
};

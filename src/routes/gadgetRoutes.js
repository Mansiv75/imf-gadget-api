const express = require("express");
const router = express.Router();
const gadgetController = require("../controllers/gadgetController");

router.get("/gadgets", gadgetController.getAllGadgets);
router.post("/gadgets", gadgetController.addGadget);

module.exports = router;

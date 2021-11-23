const express = require('express');
const router = express.Router();

router.use("/blog", require("./blog"));
router.use("/users", require("./users"));

module.exports = router;
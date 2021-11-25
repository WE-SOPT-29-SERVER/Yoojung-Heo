const express = require("express");
const router = express.Router();

router.get('/post', require('./postPostGET'));
router.post('/post', require('./postPostPOST'));

router.get('/post/:id', require('./postFindbyidGET'));
router.put('/post/:id', require('./postFindbyidPUT'));
router.delete('/post/:id', require('./postFindbyidDELETE'));

module.exports = router;
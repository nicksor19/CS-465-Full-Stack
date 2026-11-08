
const express = require('express');
const router = express.Router();
const travel = require('../controllers/travel');
router.get('/', travel.travel);
module.exports = router;

const express = require('express');
const router = express.Router();
const sobreController = require('../controllers/sobreController');

router.get('/sobre', sobreController.index);

module.exports = router;
const express = require('express');
const router = express.Router();
const politicaController = require('../controllers/politicaController');

router.get('/politica', politicaController.index);

module.exports = router;
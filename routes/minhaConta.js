const express = require('express');
const router = express.Router();
const minhaContaController = require('../controllers/minhaContaController');

router.get('/minhaConta', minhaContaController.index);

module.exports = router;
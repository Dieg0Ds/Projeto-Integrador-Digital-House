const express = require('express');
const router = express.Router();
const trabalheConoscoController = require('../controllers/trabalheConoscoController');

router.get('/trabalheConosco', trabalheConoscoController.index);

module.exports = router;
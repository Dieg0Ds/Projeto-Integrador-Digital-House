const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/', homeController.index)
router.get('/cadastro', homeController.cadastro);
router.get('/sobre', homeController.sobre);
router.get('/login', homeController.login);



module.exports = router
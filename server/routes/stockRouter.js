const express = require('express');
const router = express.Router()

const stockController = require('../controller/stockController')

router.get("/",stockController.findAll)

module.exports = router
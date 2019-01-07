const express = require('express')
const router = express.Router()
const controller = require('../controllers/itemController')

router.get('/', controller.getAll)
router.post('/', controller.addItem)

module.exports = router
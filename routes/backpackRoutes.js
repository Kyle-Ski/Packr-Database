const express = require('express')
const router = express.Router()
const controller = require('../controllers/backpackController')

router.get('/',controller.getAll)
router.post('/', controller.addPack)
module.exports = router
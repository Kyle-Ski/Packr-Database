const express = require('express')
const router = express.Router()
const controller = require('../controllers/backpackController')

router.get('/', controller.getAll)
router.post('/', controller.addPack)
router.get('/:id', controller.getOne)
module.exports = router
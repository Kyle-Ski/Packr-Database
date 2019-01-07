const express = require('express')
const router = express.Router()
const controller = require('../controllers/backpackController')
const itemController = require('../controllers/pack_itemsController')

router.get('/', controller.getAll)
router.post('/', controller.addPack)
router.get('/:id/items', itemController.getPackItems)
router.get('/:id', controller.getOne)

module.exports = router
const express = require('express')
const router = express.Router()
const controller = require('../controllers/pack_itemsController')

router.get('/', controller.getAll)
router.post('/', controller.addPackItem)
router.put('/:packId/:itemId', controller.editPackItems)
router.delete('/:packId/:itemId', controller.deletePackItems)

module.exports = router
const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.get('/backpacks', controller.getBackpacks)
router.post('/', controller.postUser)
module.exports = router
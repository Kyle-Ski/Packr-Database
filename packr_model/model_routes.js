const express = require('express')
const router = express.Router()
const controller = require('./model_controllers')

router.get('/', controller.create)

module.exports = router
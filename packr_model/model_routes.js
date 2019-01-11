const express = require('express')
const router = express.Router()
const controller = require('./model_controllers')

router.get('/create', controller.addConceptsWithImages) 

module.exports = router
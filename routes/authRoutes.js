const express = require('express')
const router = express.Router()
const controller = require('../controllers/authController')

router.post('/signup', controller.newUser)
router.post('/login', controller.logIn)

module.exports = router
const router = require('express').Router()
const userController = require('../controllers/user')

//Login 
router.post('/login', userController.login);

//SignIn
router.post('/singup', userController.signup);

module.exports = router
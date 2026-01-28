const express = require('express');
const userController = require('../Controller/userController');

const router = express.Router();

router.post('/create', userController.createUser);
router.get('/getusers', userController.getAllUsers);
router.put('/updateuser/:id', userController.updateUserData);
module.exports = router;

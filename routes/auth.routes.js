const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');


router.get('/signup', authController.getSignup);

router.post('/signup', authController.signup);
// router.post('/signup', (req, res, next) => {
//     console.log('Signup route body:', req.body);
//     next();
// }, authController.signup);

//.....


router.get('/login', authController.getLogin);

module.exports = router;
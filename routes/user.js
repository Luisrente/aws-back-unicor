

const { Router } = require('express');

const {userGet} = require('../controllers/user_controller')


const router =  Router();


router.get('/',userGet );


module.exports = router;
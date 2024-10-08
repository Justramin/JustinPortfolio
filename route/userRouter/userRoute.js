const express = require('express')
const router = express.Router()


const home = require('../../controller/userController/home')



router.get('/',home.userHome)




module.exports = router;

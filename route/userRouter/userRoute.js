const express = require('express')
const router = express.Router()


const home = require('../../controller/userController/home')




router.get('/',home.userHome)
router.get('/about',home.userAbout)
router.get('/contact',home.userContact)
router.post('/contactPost',home.contactPost)



module.exports = router;

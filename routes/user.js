const express =require('express')
const router = express.Router();

const userApiController =require('../controllers/userApiControllers');

router.post('/register',userApiController.register);
module.exports = router ;
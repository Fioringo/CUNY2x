const router = require('express').Router();
module.exports = router;

router.use('/dogs', require('./dogs')) 

const router = require('express').Router();
module.exports = router;

router.get('/', (req, res, next) => {
	res.send('woof!');
})

router.get(':dogId', (req, res, next) => {
	res.send('doggo id woof');
})

router.post(':dogId', (req, res, next) => {
	res.send('posto doggo woofo')
})
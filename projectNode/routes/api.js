var express = require('express');
var router = express.Router();
var handler = require('../handers');
/* GET users listing. */
router.post('/zhuche', handler.zhucheHandler);
router.post('/denglu', handler.dengluHandler);
router.get('/banner', handler.bannerHandler);
router.post('/fatie', handler.fatieHandler);
router.post('/fatielist', handler.fatielistHandler);


module.exports = router;
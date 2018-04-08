var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JavaScript社区' });
});
router.get('/zhuche',function(req,res,next) {
	res.render('zhuche', { title: 'JavaScript社区'})
});
router.get('/denglu',function(req,res,next) {
	res.render('denglu', { title: 'JavaScript社区'})
})
//发帖
router.get('/fatie',function(req,res,next) {
	res.render('fatie', { title: 'JavaScript社区'})
})
//看帖
router.get('/fatielist',function(req,res,next) {
	res.render('fatielist', { title: 'JavaScript社区'})
})
module.exports = router;

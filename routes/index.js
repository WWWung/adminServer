var express = require('express');
var router = express.Router();

const mysql = require('../utils/mysqlUtil');

/* GET home page. */
router.get('/test', function(req, res, next) {
//res.render('index', { title: 'Express' });
	mysql.query('select * from users', (err, rsl) => {
		res.end(JSON.stringify(rsl));
	})
});

module.exports = router;

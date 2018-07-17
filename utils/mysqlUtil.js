const mysql = require('mysql');
const config = require('../config');
const errUtil = require('./errUtil');

const pool = mysql.createPool(config.mysql);

exports.query = (sql, cb) => {
	pool.getConnection((err, con) => {
		if (err) {
			errUtil(err, '数据库连接出错');
		} else {
			sql = sql.replace(/\n/g, ' ');
			con.query(sql, (cerr, rsl) => {
				con.release();
				typeof cb === 'function' && cb(cerr, rsl)
			})
		}
	})
}

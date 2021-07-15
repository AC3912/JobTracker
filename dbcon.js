var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : '34.74.53.112:3306',
  user            : 'root',
  password        : 'jobtracker',
  database        : 'TBD'
});

module.exports.pool = pool;

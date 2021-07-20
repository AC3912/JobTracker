var mysql = require('mysql');
var pool = mysql.createPool({
   connectionLimit : 10,
   host            : '34.74.53.112',
   user            : 'root',
   password        : 'jobtracker',
   database        : 'test'
});

module.exports.pool = pool;

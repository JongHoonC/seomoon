var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'hyosung', //테이블 이름을 적어준다.
  dateStrings: 'date',
  multipleStatements: true,
});

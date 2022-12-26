var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'seomoon', //테이블 이름을 적어준다.
  dateStrings: 'date',
  multipleStatements: true,
});

// 회원가입 페이지
function userSignUp(userName, userID, userPW, callback) {
  connection.query(`INSERT INTO user_table(userName, userID, userPW, create_time) values('${userName}','${userID}','${userPW}',NOW())`, err => {
    if (err) throw err;
    callback();
  });
}

// 로그인
function loginCheck(userID, userPW, callback) {
  connection.query(`SELECT * FROM user_table WHERE userID='${userID}' and userPW='${userPW}'`, (err, results) => {
    if (err) throw err;
    callback(results);
  });
}
// 회원가입 페이지
function lightuserSignUp(userName, userID, userPW, callback) {
  connection.query(`INSERT INTO user_table(userName, userID, userPW, create_time) values('${userName}','${userID}','${userPW}',NOW())`, err => {
    if (err) throw err;
    callback();
  });
}

// 로그인
function lightloginCheck(userID, userPW, callback) {
  connection.query(`SELECT * FROM user_table WHERE userID='${userID}' and userPW='${userPW}'`, (err, results) => {
    if (err) throw err;
    callback(results);
  });
}

module.exports = {
  userSignUp,
  loginCheck,
  lightloginCheck,
  lightuserSignUp,
};

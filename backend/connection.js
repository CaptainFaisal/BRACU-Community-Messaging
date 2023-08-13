const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'captainfaisal',
  password: '1234',
  database: 'bracu_community'
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!');
  }
});

module.exports = db;
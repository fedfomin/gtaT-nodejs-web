var mysql = require('mysql');

var conn = mysql.createConnection
({
    host: '', 
    user: '',      
    password: '', 
    database: ''
}); 

conn.connect(function(err) {
  if (err) throw err;
  console.log('Connected to API database.');
});

module.exports = conn;

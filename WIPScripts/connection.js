var express = require('express');
var mysql = require('mysql');
var app = express();

var connect = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'sampleDB'
});

connection.connect(function(error) {
	if(!!error) {
		console.log('Error');
	} else {
		console.log('Connected');
	}
});

app.get('/', function(req, resp) {
	//connection.query("SELECT * FROM sampleTable", function(error, rows, fields)
	//sample
})

app.listen(1337);
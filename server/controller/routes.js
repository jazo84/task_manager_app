var pg = require('pg');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var dbURL = {
	user: process.argv.POSTGRES_USER,
	password: process.argv.POSTGRES_PASSWORD,
	database: 'task_manager',
	host: 'localhost',
	port: 5432
};

var pgClient = new pg.Client(dbURL);
pgClient.connect();

var signed_in_html = require ('../helpers/signed_in.js')
var router = express.Router();

router.get('/', function (req,res){
	res.sendfile(path.join(__dirname, '../../client/public/html/home.html'));
});

router.get('/login', function (req, res){
	res.sendfile(path.join(__dirname,'../../client/public/html/login.html'));
})

module.exports = router;

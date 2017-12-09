var pg = require('pg');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var dbURL = {
	user: process.argv.POSTGRES_USER,
	password: process.argv.POSTGRES_PASSWORD,
	database: 'taskdb',
	host: 'localhost',
	port: 5432
};

var pgClient = new pg.Client(dbURL);

pgClient.connect();

var router = express.Router();

module.exports = router;
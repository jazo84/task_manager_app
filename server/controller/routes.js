var pg = require('pg');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');
var upload = multer({dest: './uploads'});

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

/* Get users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/signup', function(req, res, next) {
	res.render('signup', {title: 'Sign Up'});
});

router.get('/login', function(req, res, next) {
	res.render('login', {title: 'Login'});
});

router.post('/signup', upload.single(''), function(req, res, next) {
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;

	if(req.file){
		console.log('Uploading File....');
		var profileimage = req.file.filename;
	} else {
		console.log('No File Uploaded...');
		var profileimage = 'noimage.jb'
	}

	// Form Validator
	req.checkBody('name', 'Name field is required').notEmpy();
	req.checkBody('email', 'Email field is required').notEmpy();
	req.checkBody('email', 'Email is not valid').notEmpy();
	req.checkBody('username', 'Username field is required').notEmpy();
	req.checkBody('password', 'Password field is required').notEmpy();
	req.checkBody('password', 'Passwords do not match').equals(req.body.password);

	// Check Errors
	var errors = req.validationErrors();

	if(errors){
		res.render('signup', {
			errors: errors
			console.log('Errors');
		});
	} else {
		console.log('No Errors');
	}
});

module.exports = router;

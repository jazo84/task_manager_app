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
	res.sendFile(path.join(__dirname, '../../client/public/html/home.html'));
});

router.get('/login', function (req, res){
	res.sendFile(path.join(__dirname,'../../client/public/html/login.html'));
});

router.post('/api/sign_up',(req,res) => {
	console.log(req.body);
	if(req.body.name !== "" && req.body.username !== "" && req.body.password !== "" && req.body.email !=="") {
		var query = "INSERT INTO users (name, username, password, email) VALUES ($1, $2, $3, $4)";
		pgClient.query(query, [req.body.name, req.body.username, req.body.password, req.body.email], (error, signUpRes)  => {
			if (error){
				res.json({error:error})
			} else {
				res.json({results:signUpRes})
			}
		});
	} else if (req.body.name === "" || req.body.username === "" || req.body.password === "" || req.body.email === "") {
		res.json({results:"a_null_field"})
	};
});

router.post('api/login', function (req,res){
	var query = `SELECT * FROM users WHERE username='${req.body.username}'`;
	pgClient.query(query, (error, loginRes)=>{
		if(req.body.password === loginRes.rows[0].password){
			if(error){
				res.json({error:error})
			} else {
				res.json({results:loginRes.rows})
			}
		}else {
			res.json({error:"Incorrect Password"})
		}
	});
});

module.exports = router;

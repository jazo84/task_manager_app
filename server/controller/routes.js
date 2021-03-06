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

var signed_in_html = require ('../helpers/signed_in.js');
var router = express.Router();

router.get('/', function (req,res){
	res.sendFile(path.join(__dirname, '../../client/public/html/home.html'));
});

router.get('/login', function (req, res){
	res.sendFile(path.join(__dirname,'../../client/public/html/login.html'));
});

router.post('/api/sign_up',(req,res) => {
	//console.log(req.body);
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

router.post('/api/login', (req,res)=>{
	//console.log(req.body)
    var query = `SELECT * FROM users WHERE username='${req.body.username}'`;
    pgClient.query(query, (error, loginRes)=>{
				if(req.body.password === loginRes.rows[0].password){
            if(error){
                res.json({error:error})
            } else {
                res.json({results:loginRes.rows})
            }
        } else {
            res.json({error:"Incorrect Password"})
        }
    });
});

router.get('/justdoittasks/profile/:id', (req,res) =>{
	var query = `SELECT users.id, users.name, tasks.id, tasks.start_date, tasks.end_date, tasks.priority, tasks.task_name, tasks.task_description, tasks.assigned_to, tasks.user_id FROM tasks INNER JOIN users ON tasks.user_id=users.id WHERE tasks.user_id=${req.params.id}`;
	pgClient.query(query, (error, userRes)=>{
		if (error) {
			res.json({error:error})
		} else {
			console.log(userRes.rows)
			res.set('Content-Type', 'text/html');
			res.send(signed_in_html(userRes.rows));
		}
	});
});

router.post('/api/task', (req, res) =>{
	if(req.body.task_name !== '' && req.body.task_description !== '') {
		var query = "INSERT INTO tasks (task_name, task_description, start_date, end_date, assigned_to, priority, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)";
	pgClient.query(query, [req.body.task_name, req.body.task_description, req.body.start_date, req.body.end_date, req.body.assigned_to, req.body.priority, req.body.user_id], (error, taskRes) => {
		if (error) {
			res.json({error:error})
		} else {
			res.json({results:taskRes})
		}
	});
	} else if (req.body.task_name === "" || req.body.task_description === "") {
		res.json ({results:"Missing_Task_Info"})
	}
});

module.exports = router;

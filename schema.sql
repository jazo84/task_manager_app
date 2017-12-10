CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	username VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
	id SERIAL PRIMARY KEY,
	username VARCHAR(255) NOT NULL,
	start_date DATE NOT NULL,
	end_date DATE NOT NULL,
	priority VARCHAR(255) NOT NULL,
  	task_name VARCHAR(255) NOT NULL,
  	task_description TEXT,
  	FOREIGN KEY (username) REFERENCES users (username)
);

CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	task_id INTEGER,
	username VARCHAR(255) NOT NULL,
	FOREIGN KEY (task_id) REFERENCES tasks (id),
	FOREIGN KEY (username) REFERENCES users (username),
	comment TEXT,
	time_stamp TIMESTAMP
);

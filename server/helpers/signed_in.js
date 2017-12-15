module.exports = (obj) => {
	var str = "<html>";
	str += "<head><title>" + obj.name + "'s Task List</title>";
	str += "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css'  crossorigin='anonymous'></head>";
	str += "<link rel='stylesheet' type='text/css' href='../../../public/css/signed-in.css'/>"
	str += "<nav><ul class='nav justify-content-end'><li class='nav-item'><a class='nav-link active'href='#'>Sign Out</a></li></ul></nav>";
	str += '<body><h1>Welcome,' +" "+ obj.name+ '</h1><br>';
	str += "<div class='card'><h3>Task List</h2><div class='row'><div class='card-body col-sm-2'>Task Name</div><div class='card-body col-sm-2'>Task Description</div><div class='card-body col-sm-2'>Start Date</div><div class='card-body col-sm-2'>End Date</div><div class='card-body col-sm-2'>Assigned By:</div><div class='card-body col-sm-1'>Priority:</div></div><hr>"
	str += "<div class='row'><div class='card-body col-sm-2'>"+obj.task_name +"</div><div class='card-body col-sm-2'>"+ obj.task_description+"</div><div class='card-body col-sm-2'>"+obj.start_date+"</div><div class='card-body col-sm-2'>"+obj.end_date+"</div><div class='card-body col-sm-2'>"+obj.assigned_to+"</div><div class='card-body col-sm-1'>"+obj.priority+"</div></div></div><br>"
	str += "<div class='row'><div class='col-sm-10'></div><div class='col-sm-2'><button type='button'class='btn btn-success data-toggle='modal' data-target='#exampleModal'>Add Task</button></div></div><br>"
	// str += "<div class='modal fade'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>";
	// str += "<h5 class='modal-title'>Add Task</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'>";
	// str += "<form><div class='form-group'><label for='Input'>Task Name</label><input type='text' class='form-control' id='task-name' placeholder='Task Name'></div>";
	// str += "<div class='form-group'><label for='Input'>Task Description</label><input type='text' class='form-control' id='task-description' placeholder='Task Description'></div>";
	// str += "<div class='form-group'><label for='Date'>StartDate</label><input type='date' class='form-control' id='start-date' placeholder='Enter Date: YYYY-MM-DD'></div>";
	// str += "<div class='form-group'><label for='Date'>EndDate</label><input type='date' class='form-control' id='end-date' placeholder='Enter Date: YYYY-MM-DD'></div>";
	// str += "<div class='form-group'><label for='Date'>Assigned To</label><input type='text' class='form-control' id='assigned-to' placeholder='Assigned To'></div>";
	// str += "<div class='form-group'><label for='priority-options'>Priority</label><select class='form-control' id='priority'><option>Urgent</option><option>High</option><option>Medium</option><option>Low</option></select></div></form></div>";
	// str += "<div class='modal-footer'><button type='button' class='btn btn-primary'>Submit Task</button><button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button></div></div></div></div>";
	str += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>";
	str += '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>';
	str += "<script src='../../../public/js/signed-in-two.js'></script>";
	str += "</body></html>";
	return str;
}

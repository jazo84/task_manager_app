$(document).ready(function(){
	$('submit_task-form').onclick('submit',function(e)){
		e.prenvenDefault();

		var signedInObj = {
			task_name: $('name-input').val(),
			task_description: $('description-input').val(),
			start_date: $('start-input').val(),
			end_date: $('end-input').val(),
			priority: $('priority-input').val(),
			assigned_to: $('assigned-input').val()
		}
		console.log(signedInObj);
		console.log(JSON.stringify(signedInObj));
		}
	}

		appendAddTaskList();

	$('name-input').val(),
	$('description-input').val(),
	$('start-input').val(),
	$('end-input').val(),
	$('priority-input').val(),
	$('assigned-input').val()
});
	
	function appendAddTaskList(){
		$('all-div').remove();
	}
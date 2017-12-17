$(document).ready(function(){

	$('#modal_form_submit').on('click',function(e){
		e.preventDefault();

		var taskId = $(this).data('id');

		var signedInObj = {
			user_id: taskId,
			task_name: $('#task_name').val(),
			task_description: $('#task-description').val(),
			start_date: $('#start-date').val(),
			end_date: $('#end-date').val(),
			priority: $('#priority').val(),
			assigned_to: $('#assigned-to').val()
		}

			$.ajax({
				method:'POST',
				url:'/api/task',
				dataType: 'json',
				data: JSON.stringify(signedInObj),
				contentType: 'application/json'
			}).then(function(res){
				console.log(res)
				if(res.results === "Missing_Task_Info"){
					alert("All Fields must be entered to submit a task")
				} else {
					$('#create-task-modal').modal('toggle');
				};
			});

		$('#task_name').val(),
		$('#task-description').val(),
		$('#start-date').val(),
		$('#end-date').val(),
		$('#priority').val(),
		$('#assigned-to').val()
		// console.log(signedInObj);
	});



	$(document).on('click', '#addTaskButton', function(){
		$('#create-task-modal').modal();
<<<<<<< HEAD
		//var inputDiv = $('div id="modal-input-div" >');

=======
>>>>>>> 3d9c4007cdaf61fb9faf3840f872408aaa607b9d
	});
});


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
					//console.log(signedInObj);
					//alert("Your Task Has Been Submitted Successfully");
				};
			});
			//$('#submit_task').submit();
			 //});
		//console.log(signedInObj);
		//console.log(JSON.stringify(signedInObj));
		//appendAddTaskList();
		$('#task_name').val(),
		$('#task-description').val(),
		$('#start-date').val(),
		$('#end-date').val(),
		$('#priority').val(),
		$('#assigned-to').val()
	});

	$(document).on('click', '#addTaskButton', function(){
		//$('#modal-input-div').remove();
		$('#create-task-modal').modal();
		//var inputDiv = $('div id="modal-input-div" >');
	});
});

$(document).ready(function(){
	$('submit_task-form').on('submit',function(e){
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

		appendAddTaskList();
	
		$('name-input').val(),
		$('description-input').val(),
		$('start-input').val(),
		$('end-input').val(),
		$('priority-input').val(),
		$('assigned-input').val()
	});

	$(document).on('click', '#addTaskButton', function(){
		//$('#modal-input-div').remove();
		//var taskId = $(this).data('id');
		$('#create-task-modal').modal();

		//var inputDiv = $('div id="modal-input-div" >');

		

	})
});
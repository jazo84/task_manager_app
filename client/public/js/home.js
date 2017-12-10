
$(document).ready(function(){

	$('#sign-up').on('submit', function(e){
		e.preventDefault();

		var postObj = {
			name: $('#name_input').val(),
			email: $('#email_input').val(),
			username: $('#username_input').val(),
			password: $('#password_input').val()
		}

		$.ajax({
			method: 'POST',
			url: '/api/sign-up',
			dataType: 'json',
			data: JSON.stringify(postObj),
			contentType: 'application/json'
		}).then(function(res){
			if(res.results = "success"){
				window.location.href = '/login';
			}else{
				alert('Error')
			}

		});

		$('#name_input').val("");
		$('#email_input').val("");
		$('#username_input').val("");
		$('#password_input').val("");
		
	});

});
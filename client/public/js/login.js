$(document).ready(function() {

	$('#log-in-form').on('submit', function(e){
		e.preventDefault();

		var logInObj = {
			username: $('#username_input').val(),
			password: $('#password_input').val()
		}

		$.ajax({
			method: 'POST',
			url: '/api/login',
			dataType: 'json',
			data: JSON.stringify(logInObj),
			contentType: 'application/json'
		}).then(function(res){
			console.log(res)
			if(res.error === "Incorrect Password"){
				alert("Incorrect Password")
			} else {
				alert("Success")
				window.location.href = '/justdoit/tasks/:'+ res.results[0].username
				//window.location.href = '/justdoittasks/profile/' + res.results[0].id
			}
		});

		$('#username_input').val(""),
		$('#password_input').val("")
	});

});

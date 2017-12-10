$(document).ready(function)() {

	$('#log-in-form').on('submit', function(e)){
		e.preventDefault();

		var logInObj = {
			username: $('#exampleInputUsername').val(),
			password: $('#exampleInputPassword1').val()
		}

		$.ajax({
			method: 'POST',
			url: '/api/login',
			dataType: 'json',
			data: JSON.stringify(logInObj),
			contentType: 'application/json'
		}).then(function(res){
			if(res.error === "Incorrect Password"){
				alert("Incorrect Password")
			} else {
				//window.location.href = '/api/sign/' 
				console.log(username);
			}
		});

		$('#exampleInputUsername').val("");
		$('#exampleInputPassword1').val("");
	});
});
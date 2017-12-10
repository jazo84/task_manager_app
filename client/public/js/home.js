$(document).ready(function(){

	$('#sign-up').on('submit', function(e){
		e.preventDefault();

		var signUpObj = {
      name:$('#name_input').val(),
      username: $('#username_input').val(),
			password: $('#password_input').val(),
      email: $('#email_input').val()
		}

		$.ajax({
			method: 'POST',
			url:'/api/sign_up',
			dataType: 'json',
			data: JSON.stringify(signUpObj),
			contentType: 'application/json'
		}).then(function(res){
			if(res.results === "a_null_field"){
				alert("All Fields must be entered to sign-up")
			} else {
        console.log(signUpObj);
        alert("Success");
				window.location.href = '/login'
			};
		});
    $('#name_input').val(),
    $('#username_input').val(),
    $('#password_input').val(),
    $('#email_input').val()
	});
});

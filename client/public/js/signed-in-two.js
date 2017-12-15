
$(document).ready(function() {
  $("#task_button").modal();
  $.ajax({
  	method: 'GET',
  	url: '/api/profile'
  })
  });

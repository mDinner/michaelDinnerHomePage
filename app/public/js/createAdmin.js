$(document).ready(function(e) {

	$("form#createAdmin").submit(function(e) {
		console.log('submit fired');
		e.preventDefault();

		var form_data = $(this).serialize();
		var form_url = $(this).attr("action");

		$.ajax({
			url: form_url,
			type: 'POST',
			data: form_data,
			cache: false,
			success: function(returnhtml) {
				console.log('Succesfully added user!');
				window.location.pathname = '/admin';
			}
		});
	});
});
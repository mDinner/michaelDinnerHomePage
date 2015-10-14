(function($){
	var path = window.location.pathname;  //  localhost:8000/editAdmin/56158fd5f951a4a70f023886
	var pathi = path.split("/");   //         ['localhost:8000', editAdmin, 56158fd5f951a4a70f023886]
	var path = pathi[1] + pathi[2];
	var editPath = '/editAdmin/' + pathi[2];
	var fullEditPath = pathi[0] + editPath;
	$('form#editAdmin').attr('action', editPath);
	var deletePath = '/deleteAdmin/' + pathi[2];
	$('.delete-link').attr('href', deletePath);
	

	$('#editAdmin').submit(function(e){
		e.preventDefault();
		
		var em = $('input.email');
		var email = $(em).val();
		// var placeholder = $(em).attr('placeholder');
		// if(email == ""){
		// 	email = placeholder == "Email" ? "" : placeholder;
		// }
		
		var n = $('input.name');
		var name = $(n).val();
		// var namePlaceholder = $(n).attr('placeholder');
		// if(name == ""){
		 	name = namePlaceholder == "No Name" ? "" : namePlaceholder;
		// }


		var t = $('input.type');
		var type = $(t).val();
		// var typePlaceholder = $(t).attr('placeholder');
		// if(type == ""){
		// 	type = typePlaceholder == "User Type" ? "" : typePlaceholder;
		// }

		var pwd = $('input.password').val();
		var pwdC = $('input.password-confirm').val();


		function _ajax_request(url, data, callback, method) {
		    return jQuery.ajax({
		        url: url,
		        type: method,
		        data: data,
		        success: callback
		    });
		}

		jQuery.extend({
		    put: function(url, data, callback) {
		        return _ajax_request(url, data, callback, 'PUT');
		}});

		var fullName = name.split(' ');
		var fname = fullName[0];
		var lname = fullName[1];



		$.put(editPath, { email: email, fname: fname, lname: lname, type: type, password: pwd }, function(result) {
	   		 // do something with the results of the AJAX call
	   		 	alert('success, path2: ' + path2);
	   		 	window.location.pathname = '/manageUsers';

	   	});
	});
	
	var path = window.location.pathname;
	var ps = path.split('/');
	var path1 = ps[1]; 
	var path2 = ps[2];
	var p = "/deleteUser" + '/' + path2;

	//$('a.delete-user').attr('href', '/');


})(jQuery);
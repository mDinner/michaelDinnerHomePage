$(document).ready(function(){

	var path = window.location.pathname;  //  localhost:8000/editAdmin/56158fd5f951a4a70f023886
	var pathi = path.split("/");   //         ['localhost:8000', editAdmin, 56158fd5f951a4a70f023886]
	var path = '/' + pathi[1] + '/' + pathi[2];
	var deletePath = 'http://localhost:8000/adminData/admin/' + pathi[2];

  $('#delete-admin-form').attr('action', deletePath);


 $.ajax({
      type: 'GET',
      dataType: "json",
      url: '/adminData/admin/' + pathi[2], 
      success: function(admin) {
        
   

       $('#result').append('<a href="adminData/' + admin._id + '">' + admin._id + '</a><h2>Details: </h2><div>email: ',  admin.email , ' <br /> First Name: ', admin.fname, ' <br />Last Name: ' , admin.lname , ' <br />Password: ' ,admin.password , ' <br />Birthday: ', admin.birthday,'</div><br /><br />');
        
     }
   });

 $("#delete-admin-form").submit(function(e) {
    e.preventDefault();

    var form_data = $(this).serialize();
    var form_url = deletePath;
    var form_method = 'DELETE';
    $.ajax({
      url: form_url,
      type: form_method,
      data: form_data,
      cache: false,
      success: function(returnhtml) {
        window.location.pathname = '/admin';
        alert('User Deleted');
      }
    });
  });



});
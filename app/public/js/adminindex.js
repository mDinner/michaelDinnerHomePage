$(document).ready(function(){



 $.ajax({
      type: 'GET',
      dataType: "json",
      url: '/adminData/allAdmins', 
      success: function(admins) {

        admins.forEach(function(admin) {

          $('#result').append('<a href="editAdmin/' + admin._id + '">' + admin._id + '</a><h2>Details: </h2><div>email: ',  admin.email , ' <br /> First Name: ', admin.fname, ' <br />Last Name: ' , admin.lname , ' <br />Password: ' ,admin.password , ' <br />Birthday: ', admin.birthday,'</div><br /><br />');
        });
        
     }
   });



});
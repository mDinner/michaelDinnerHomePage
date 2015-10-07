exports = module.exports = function( router, Admin ){
	
	router.get('/', function(req, res) {
		res.render('index');
	});

	router.get('/admin', function(req, res) {
		res.render('admin');
	});
	

	router.route('/adminData/allAdmins')
		.get(function(req, res) {
			Admin.find(function(err, admins) {
			if (err){
				res.send(err);	
			}else{
				res.json(admins);	
			}

		});
	}).post(function(req, res) {
			var admin = new Admin();
			admin.email = req.body.email;
			admin.fname = req.body.fname;
			admin.lname = req.body.lname;
			admin.password = req.body.password;
			admin.birthday = req.body.birthday;
			admin.save(function(err) {
				if (err)
					res.send(err);
				res.json({ message: 'Admin Created!'});
			});
	});

}
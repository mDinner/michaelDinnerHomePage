exports = module.exports = function( router, Admin ){
	
	router.get('/', function(req, res) {
		res.render('index');
	});

	router.get('/admin', function(req, res) {
		res.render('adminindex');
	});
	

	router.route('/adminData/admin/:admin_id')
	.get(function(req, res) {
		Admin.findById(req.params.admin_id, function(err, admin) {
			if (err){
				res.send(err);
			}else{
	  			res.json(admin);
	  		}
		});
	}).delete(function(req, res) {
		Admin.remove({
			_id: req.params.admin_id
		}, function(err, admin) {
			if (err)
				res.send(err);
			res.render('admin');
		});
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


	router.get('/addAdmin', function(req, res) {
		res.render('addAdmin');
	});


	router.get('/deleteAdmin/:admin_id', function(req, res) {
		res.render('deleteAdmin');
	});


	router.route('/editAdmin/:admin_id')
	.get(function(req, res) {
		Admin.findById(req.params.admin_id, function(err, admin) {
			if (err){
				res.send(err);
			}
	  		res.render('editAdmin');
		});
	}).put(function(req, res) {
	// find the post
		Admin.findById(req.params.post_id, function(err, admn) {	
			if (err){
				res.send(err)
			}
			admn.title = req.body.title;
			admn.content = req.body.content; 	// update the admns info
			admn.save(function(err) {			// save the post
				if (err){res.send(err);}
				res.render('adminindex');
			});
		});
	});




}
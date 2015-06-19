var express = require('express');
var router = express.Router();

/* GET users listing. */
module.exports = function(passport) {

	router.route('/users')
		.get(function (req, res) {
			res.send('respond with a resource');
		})
		.post(passport.authenticate('register', {session: false}), function(req, res) {
			res.json(req.user);
		});

	return router;
};

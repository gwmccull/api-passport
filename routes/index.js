var express = require('express');

var router = express.Router();

module.exports = function() {

	/* GET home page. */
	router.route('/')
		.get(function (req, res) {
			console.log("index.js");
			res.json({ title: 'Express' });
		});

};
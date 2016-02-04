// Get all of our friend data
//this loads the JSON database into the variable data... damn
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index',data);
};
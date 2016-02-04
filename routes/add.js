var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var newFriend = {
	   /* name : "Gunther",
		description : "he get's real excited when you touch his tra-la-la"*/
        name: req.query.name,
        description: req.query.description,
		imageURL : "http://lorempixel.com/500/500/people"
	  
	}
	data["friends"].push(newFriend);
	res.render('add',data)
 }
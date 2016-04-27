var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/btb';

var db;
MongoClient.connect(mongoUrl, function(eror, database){
	db = database;
})

/* GET home page. */
router.get('/search', function(req, res, next) {
	db.collection('students').find().toArray(function(error, studentResult){
		res.json(studentResult);
	});
  
});
router.post('/search', function(req, res, next) {
	var individualStudent = req.body.name;
	db.collection('students').find({name: individualStudent}).toArray(function(error, studentResult){
		if(studentResult.length == 0){
			db.collection('students').insertOne({
				name: individualStudent
			})
			res.json('Sorry, not found. Added ' + individualStudent + ' to the database')
		}else{
			res.json('Student: ' + studentResult[0].name)
		}
	});

	// var dcClass = [
	// 	'Tristan',
	// 	'Josh',
	// 	"Bogdan",
	// 	'Keith',
	// 	'Will',
	// 	'Curtis',
	// 	'Joe',
	// 	'Kochan',
	// 	'Patric',
	// 	'Jonathan',
	// 	'Jeremy'
	// ];

	// if(dcClass.indexOf(name) > -1){
	// 	res.json({message:'hello ' + name + ', you are a student in this class'})
	// }else{
	// 	res.json({message: 'you are not in the clas'})
	// }
  // res.json({message: req.body.name});
});


module.exports = router;

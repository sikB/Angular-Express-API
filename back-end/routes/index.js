var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.post('/search', function(req, res, next) {
	var name = req.body.name;

	var dcClass = [
		'Tristan',
		'Josh',
		"Bogdan",
		'Keith',
		'Will',
		'Curtis',
		'Joe',
		'Kochan',
		'Patric',
		'Jonathan',
		'Jeremy'
	];

	if(dcClass.indexOf(name) > -1){
		res.json({message:'hello ' + name + ', you are a student in this class'})
	}else{
		res.json({message: 'you are not in the clas'})
	}
  // res.json({message: req.body.name});
});


module.exports = router;

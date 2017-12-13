var express = require('express');
var router = express.Router();
var checklist = require('../models/checklist');
var policy = require('../models/policy');
var user = require('../models/user');
var pageVisit = require('../models/pageVisit');
var roles = require('../models/roles');

/* GET home page. */
router.get('/', function (req, res, next) {
	console.log(process.env);
	res.render('index', {title: 'Express'});
});

//user
router.get('/getUser/:id', function (req, res) {
});
router.get('/getUsers', function (req, res) {
	user.find(function (err, users) {
		res.send(users);
	});
});
router.post('/addUser', function (req, res) {
});
router.post('/editUser/:user', function (req, res) {
});
router.get('/getFavorites/:user', function (req, res) {
});
router.post('/addFavorite/:user', function (req, res) {
});
router.post('/RemoveFavorite/:user', function (req, res) {
});

//roles
router.post('/addRole', function (req, res) {
});
router.post('/editRole', function (req, res) {
});

//policies
router.post('/getPolicy', function (req, res) {
	policy.findOne({'name': req.body.name}, function (err, result) {
		if (err) {
			res.send(err);
		}
		if (result) {
			console.log(result);
			res.send(result);
		} else {
			res.send("error");
		}
	});
});

router.get('/getPolicies', function (req, res) {
	policy.find({}, {"title": 1, "_id": 0, "name": 1}, function (err, result) {
		if (err) {
			res.send(err);
		}
		if (result) {
			res.send(result);
		} else {
			res.send("error");
		}
	});
});

router.post('/searchPolicies', function (req, res) {
	console.log(req.body);
	policy.find({
		$or: [{'name': {"$regex": req.body.search, "$options": "i"}}, {
			'tags': {
				"$regex": req.body.search,
				"$options": "i"
			}
		}]
	}, {'name': 1, 'title': 1, 'description': 1, '_id': 0, 'tags': 1, 'hits': 1}, function (err, result) {
		if (err) {
			res.send(err);
		}
		if (result) {
			res.send(result);
		} else {

			res.send("error");
		}
	});
});
router.post('/addPolicy', function (req, res) {
	console.log(req.body);
	var parsedPolicy = req.body;
	parsedPolicy.name = parsedPolicy.title.replace(/^([A-Z])|\s(\w)/g, function(match, p1, p2, offset) {
		if (p2) return p2.toUpperCase();
		return p1.toLowerCase();
	});
	policy.findOne({'policy.name': parsedPolicy.name}, function (err, result) {
		if (err)
			res.send(err);
		if (result) {
			res.status(500).json({error: 'Policy Already Exists'});
		} else {
			var newPolicy = new policy();
			newPolicy.name = parsedPolicy.name;
			newPolicy.title = parsedPolicy.title;
			newPolicy.name = parsedPolicy.name;
			newPolicy.category = parsedPolicy.category;
			newPolicy.description = parsedPolicy.description;
			newPolicy.active = parsedPolicy.active;
			newPolicy.steps = parsedPolicy.steps;
			newPolicy.links = parsedPolicy.links;
			newPolicy.tags = parsedPolicy.tags;
			newPolicy.additionalInfo = parsedPolicy.additionalInfo;
			newPolicy.save();
			res.send("Policy Added");
		}
	});
});
router.post('/editPolicy', function (req, res) {
	console.log(req.body.name);
	policy.findOne({'name': req.body.name}, function (err, result) {
		if (err)
			res.send(err);
		if (result) {
			result.name = req.body.name;
			result.title = req.body.title;
			result.name = req.body.name;
			result.category = req.body.category;
			result.description = req.body.description;
			result.active = req.body.active;
			result.steps = req.body.steps;
			result.links = req.body.links;
			result.tags = req.body.tags;
			result.additionalInfo = req.body.additionalInfo;
			result.save();
			res.send("Policy Edited");
		} else {
			res.status(500).json({error: 'Policy Not Found'});
		}
	});
});
router.get('/getCategories', function(req, res){
	policy.distinct('category', function(error, category) {
		if(error){
			res.send(error);
		} else{
			res.send(category);
		}
	});
});

//checklist
router.get('/getMyChecklists', function (req, res) {
	checklist.find(function (err, checklists) {
		res.send(checklists);
	});
});
router.post('/addChecklist', function (req, res) {
});
router.post('/editChecklist', function (req, res) {
});

module.exports = router;

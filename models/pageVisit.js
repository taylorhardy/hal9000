var mongoose = require('mongoose');

var PageVisitSchema = mongoose.Schema({
	pageVisit: {
		name: String,
		id: Number,
		userHits: [{
			firstName: String,
			lastName: String,
			fullName: String,
			email: String,
			phone: Number,
			roles: [{
				name: String,
				id: String,
				active: Boolean
			}],
			active: Boolean,
			numHits: Number,
			lastVisitDate: { type: Date, default: Date.now }
		}]
	}
});

module.exports = mongoose.model('pageVisit', PageVisitSchema);
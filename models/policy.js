var mongoose = require('mongoose');

var PolicySchema = mongoose.Schema({
	name: String,
	id: Number,
	title: String,
	"category": {
		"name": String,
		"id": Number,
		"active": Boolean,
		"subcategory": {
			"name": String,
			"id": Number,
			"active": Boolean
		}
	},
	description: String,
	lastUpdated: {type: Date, default: Date.now},
	updatedBy: String,
	active: Boolean,
	hits: Number,
	steps: [{
		text: String,
		ordering: String,
		adminNotes: String,
		active: Boolean,
		image: String
	}],
	links: [{
		title: String,
		href: String,
		active: Boolean
	}],
	images: [{
		name: String,
		src: String,
		active: Boolean
	}],
	videos: [{
		name: String,
		src: String,
		active: Boolean
	}],
	tags: String,
	additionalInfo: [{
		title: String,
		text: String,
		active: Boolean
	}]
});

module.exports = mongoose.model('policy', PolicySchema);
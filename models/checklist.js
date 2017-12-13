var mongoose = require('mongoose');

var ChecklistSchema = mongoose.Schema({
	checklist: {
		name: String,
		id: Number,
		active: Boolean,
		updated: { type: Date, default: Date.now },
		updatedBy: String,
		type: String,
		roles: [{
			name: String,
			id: String
		}],
		items:[{
			name: String,
			active: Boolean
		}]
	}
});

module.exports = mongoose.model('checklist', ChecklistSchema);
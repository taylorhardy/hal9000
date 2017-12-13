var mongoose = require('mongoose');

var RoleSchema = mongoose.Schema({
	role: {
		name: String,
		id: Number,
		active: Boolean
	}
});

module.exports = mongoose.model('role', RoleSchema);
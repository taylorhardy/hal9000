var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	user: {
		firstName: String,
		lastName: String,
		fullName: String,
		email: String,
		phone: Number,
		id: Number,
		roles: [{
			name: String,
			id: String,
			active: Boolean
		}],
		favorites: [{
			user: String,
			name: String,
			id: Number,
			category: String,
			subcategory: String,
			active: Boolean
		}],
		active: Boolean
	}
});

module.exports = mongoose.model('user', UserSchema);
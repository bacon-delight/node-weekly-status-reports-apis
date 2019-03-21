const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const holidaySchema = new Schema({
	date: String,
	comment: String,
	userId: String
});

module.exports = mongoose.model('Holiday', holidaySchema);
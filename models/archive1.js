const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const archive1Schema = new Schema({
	userId: String,
	weekstart: String,
	weekend: String,
	distribution: String,
	project: String,
	accomplishments: String,
	plans: String,
	issues: String,
	bh: String,
	nbh: String,
	expenses: String,
	expensesNext: String
});

module.exports = mongoose.model('Archive1', archive1Schema);
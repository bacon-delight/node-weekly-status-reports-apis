const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const archive2Schema = new Schema({
	userId: String,
	year: String,
	weekNumber: String,
	weekEnding: String,
	primary: String,
	secondary: String,
	clientRegion: String,
	client: String,
	projectName: String,
	projectActivity: String,
	status: String,
	phase: String,
	projectManager: String,
	date1: String,
	date2: String,
	date3: String,
	date4: String,
	date5: String,
	date6: String,
	date7: String,
	date8: String,
	date9: String,
	comments: String
});

module.exports = mongoose.model('Archive2', archive2Schema);
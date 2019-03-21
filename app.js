const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Allow Cross-Origin Requests
app.use(cors());

//Deploy Port
const PORT = process.env.PORT || 4001;

mongoose.connect('mongodb+srv://bacon:bacon@cluster0-ysvqj.mongodb.net/philips-wsr?retryWrites=true', {
	useNewUrlParser: true
});

/*mongoose.connect('mongodb://localhost/wsr', {
	useNewUrlParser: true
});*/

//Event Listener
mongoose.connection.once('open', () => {
	console.log('Connected to MongoDB');
})

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(PORT, () => {
	console.log('Listening for requests on Port:' + PORT);
});
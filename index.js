const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; 
const getUsers = require('./queries').getUsers;

app.use(bodyParser.json());

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)

app.get('/', (req, res) => {
	res.json({info: 'Node.js, Express & PostGres API'})
});

app.get('/users', getUsers)

app.listen(port, () => {
	console.log('App listening on port '+port);
})

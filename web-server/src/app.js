// FOR GRABBING FULL FILE PATH
const path = require('path');
// FOR ROUTING-EASE
const express = require('express');

const app = express();

// MAKING/SETTING UP ROUTES

// ACCESSING INFO ON node object
// console.log(__dirname);
// console.log(__filename);
console.log(path.join(__dirname, '../public'));

// CUSTOMIZE SERVER W/ app.use()
	// ALLOWS express TO CHECK THIS PATH FOR path names AND SO DO NOT NEED app.get('pathName') AS BELOW FOR SERVING UP html docs
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

// ROUTING BY HAND
	// DO NOT NEED COS app.use SERVES UP HOME PATH
	// app.get('', (req, res) => {
	// 	res.send('Hello Express!');
	// });
app.get('/testPage1', (req, res) => {
	res.send({
		name: 'Bill',
		age: 37
	});
});
app.get('/testPage2', (req, res) => {
	res.send('<title>Test Page2 Here</title>');
});

// ROUTING W/ OBJECTS, ARRAYS, JSON, etc.
app.get('/weather', (req, res) => {
	res.send({
		forecast: 'Sunny & windy',
		location: 'KY'
	});
});

// LISTENER
app.listen(3000, () => {
	console.log('Server is up on 3000');
});
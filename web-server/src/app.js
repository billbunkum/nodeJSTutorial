// FOR GRABBING FULL FILE PATH
const path = require('path');
// FOR ROUTING-EASE
const express = require('express');
const hbs = require('hbs');

const app = express();

// MAKING/SETTING UP ROUTES

// ACCESSING INFO ON node object
// console.log(__dirname);
// console.log(__filename);
console.log(path.join(__dirname, '../public'));

// CUSTOMIZE SERVER W/ app.use()
	// ALLOWS express TO CHECK THIS PATH FOR path names AND SO DO NOT NEED app.get('pathName') AS BELOW FOR SERVING UP html docs
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// SETUP hbs ENGINE AND views/templates LOCATION
app.set('view engine', 'hbs');

// BY DEFAULT, templates/ IS CALLED views/, WE CHANGE IT TO views/ HERE JUST TO SHOW HOW IT CAN BE CHANGED IN hbs
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

// USING hbs TO render() THE index.hbs FILE
app.get('', (req, res) => {
	res.render('index', {
		pageTitle: 'Weather',
		title: 'Weather App!',
		name: 'iiixi'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		pageTitle: 'About',
		title: 'About Me',
		name: 'iiixi'
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		pageTitle: 'Help',
		title: 'Help page',
		name: 'iiixi',
		helpText: "here's some text"
	});
});

// // ROUTING W/ OBJECTS, ARRAYS, JSON, etc.
// app.get('/weather', (req, res) => {
// 	res.send({
// 		forecast: 'Sunny & windy',
// 		location: 'KY'
// 	});
// });

// CATCH 404's
app.get('/help/*', (req, res) => {
	res.render('404', {
		pageTitle: '404',
		title: '404 help article',
		errorMessage: 'help-article not found',
		name: 'iiixi'
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		pageTitle: '404',
		title: '404',
		errorMessage: '404 Page',
		name: 'iiixi'
	});
});

// ROUTING BY HAND
	// DO NOT NEED COS app.use SERVES UP HOME PATH
	// app.get('', (req, res) => {
	// 	res.send('Hello Express!');
	// });
// app.get('/testPage1', (req, res) => {
// 	res.send({
// 		name: 'Bill',
// 		age: 37
// 	});
// });
// app.get('/testPage2', (req, res) => {
// 	res.send('<title>Test Page2 Here</title>');
// });


// LISTENER
app.listen(3000, () => {
	console.log('Server is up on 3000');
});
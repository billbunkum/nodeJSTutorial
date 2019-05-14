const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');

// TAKES INPUT FROM PROCESSED VAR PASSES THRU YARGS AND STORES
// PARSED OUTPUT IN argv
const argv = yargs
	.options({
		a: {
			demand: false,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		},
		w: {
			demand: false,
			alias: 'weather',
			describe: 'Weather for address',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;
	
// console.log(argv);
let address = argv.address;

if (argv.weather) {
	geocode.getWeather(address, (errorMessage, body) => {
		if (body) {
			console.log(body);
		} else {
			console.log('fuck');
		}
	});
} else {
	geocode.getLocation(address, (errorMessage, code400, body) => {
		if (errorMessage) {
			console.log('what', errorMessage);
		} else if (code400) {
			console.log(`Cannot find location - status code: ${code400}`); 
		} else {
			console.log(JSON.stringify(body, undefined, 2));
		}
	}
);
}
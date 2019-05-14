// http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=1301%20lombard%20street%20philadelphia
// vKABhGDJuEVQX4pVs5rCVPrGlYd5wKn2

let request = require('request');

const key = 'vKABhGDJuEVQX4pVs5rCVPrGlYd5wKn2';
const theUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=1301%20lombard%20street%20philadelphia`;

let getUser = (id, callback) => {
	let user = {
		id: id,
		name: 'doop'
	};
	setTimeout( () => {
		callback(user);	
	}, 1000);
};
getUser(31, (userObject) => {
	console.log(userObject);
});

let getDirections = (callback) => {
	let result = request(theUrl, (error, response, body) => {
		callback(result);
	});
};
getDirections( (theGoods) => {
	console.log(theGoods);
});
// www.npmjs.com/package/request
const request = require('request');
const key = 'vKABhGDJuEVQX4pVs5rCVPrGlYd5wKn2';
const darkskyAPIKey = '297842be681beeba3e18b115c8bab523';
// DARK SKY DOCS
// https://api.darksky.net/forecast/297842be681beeba3e18b115c8bab523/37.8267,-122.4233
// https://api.darksky.net/forecast/<apikey>/<lat>,<long>
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

let getLocation = (address, callback) => {	
	let location = encodeURIComponent(address);
	request({
		json: true,
		url: `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${location}`
		}, (error, response, body) => {
			if (error) {
				callback(`System error: ${error}`);
			} else if (body.info.statuscode === 400) {
				let statuscode = body.info.statuscode;
				let code400 = statuscode;
				callback(undefined, code400);
				} else {
					let theGoods = body.results[0];
					callback(undefined, {
						address: theGoods.providedLocation.location,
						latitude: theGoods.locations[0].latLng.lat,
						longitude: theGoods.locations[0].latLng.lng
					});
				}
			}
	)
};

module.exports = {
	getLocation
};

// MAPQUEST API STUFF
// request({
// 	json: true,
// 	url: `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=1301%20lombard%20street%20philadelphia`
// }, (error, response, body) => {
// 	// PRETTY PRINTING USING `JSON.stringify(<jsonObject>, <mostly useless function>, <# of spaces to indent>)
// 	// console.log(JSON.stringify(response, undefined, 2));
// 	let theGoods = body.results[0].locations[0].latLng;
// 	console.log(
// 		// JSON.stringify(theGoods, undefined, 2)
// 		`Latitude: ${theGoods.lat}`
// 	);
// 	console.log(`Longitude: ${theGoods.lng}`);
// });

// http://www.mapquestapi.com/geocoding/v1/address?key=vKABhGDJuEVQX4pVs5rCVPrGlYd5wKn2&location=1301%20lombard%20street%20philadelphia
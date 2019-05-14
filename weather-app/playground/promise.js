// PROMISES ARE ONLY resolved OR rejeted ONCE

let asyncAdd = (a, b) => {
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			} else {
				reject('Values must be numbers');
			}
		}, 1500);
	});
};

// ALL errorMessages RUN BECAUSE then THINKS WE'VE RESOLVED THEM;
// USE .catch() AFTER ALL .then() STATEMENTS TO AVOID THIS PROBLEM W/
// ERROR HANDLING

asyncAdd(5, '7').then( (res) => {
	console.log(res);
	return asyncAdd(res, 33);
}).then( (res) => {
	console.log('should be 45 -> ', res);
}).catch( (errorMessage) => {
	console.log(errorMessage);
});

// asyncAdd(5, 7).then( (res) => {
// 	console.log('Result: ', res);
// 	return asyncAdd(res, 33);
// }, (errorMessage) => {
// 	console.log(errorMessage);
// }).then( (res) => {
// 	console.log('should be 45: ->', res);
// }, (errorMessage) => {
// 	console.log(errorMessage);
// });

// somePromise = new Promise( (resolve, reject) => {
// 	setTimeout( () => {
// 		// resolve('Hey, it workd!');
// 		reject('Unable to fulfill promise');
// 	}, 2000);
// });

// somePromise.then( (message) => {
// 	console.log('Success:', message);
// }, (errorMessage) => {
// 	console.log('Error:', errorMessage);
// });
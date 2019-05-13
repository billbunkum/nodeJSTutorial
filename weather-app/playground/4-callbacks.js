// USING callback TO SIMULATE ASYNCHRONOUS CODE + CALLBACKS
// callback CALLS THE 2nd PROPERTY OF geocode(), AN ANONYMOUS
// FUNCTION W/ data AS ITS PROPERTY

// const geocode = (address, callback) => {
// 	setTimeout(() => {
// 		const data = {
// 			lat: 0,
// 			long: 0
// 		}

// 		callback(data);
// 	}, 2000);
// };

// geocode('Los Angeles', (data) => {
// 	console.log(data);
// });

// CHALLENGE

const add = (num1, num2, callback) => {
	setTimeout(() => {
		callback(num1 + num2);
	}, 2000);
};

add(1, 4, (sum) => {
	console.log(sum) // PRINTS 5
});
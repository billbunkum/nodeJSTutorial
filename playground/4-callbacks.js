// setTimeout( () => {
// 	console.log('2 seconds are up');
// }, 2000)

// const names = ['andrew', 'jen', 'bill'];
// const shortNames = names.filter( (name) => {
// 	return name.length <= 4
// });

// const geocode = (address, callback) => {
// 	setTimeout( () => {
// 		const data = {
// 			longitude: 0,
// 			latitude: 0
// 		}

// 		callback(data);
// 	}, 2000)
// }

// geocode('New Orleans', (data) => {
// 	console.log(data);
// });

const add = (num1, num2, callback) => {
	setTimeout( () => {
		callback(num1 + num2);
	}, 2000);
};

add(1, 4, (sum) => {
	console.log(sum);
});
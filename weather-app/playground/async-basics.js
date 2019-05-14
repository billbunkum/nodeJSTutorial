// PROVING WHAT'S UP IN THE ASYNC HOOD

console.log('starting app');

setTimeout( () => {
	console.log('within setTimeout')
	}, 2000);

setTimeout( () => {
	console.log('zero seconds');
}, 0);

console.log('finishing up');
// ARROW FUNCTIONS

// STATEMENT SYNTAX
let square = (x) => {
	let result = x * x;
	return result;
};

// EXPRESSION SYNTAX
let exp_square = (x) => x * x;

console.log(square(9));
console.log(exp_square(7));

// `this` IS NOT BOUND IN ARROW FUNCTIONS
// arguments array IS ALSO NOT BOUND
// ES6 PROVIDES A WORK-AROUND
let user = {
	name: 'bill',
// DOES NOT WORK AS EXPECTED COS this IS NOT BOUND
	sayHi: () => {
		// GLOBAL arguments array AS IT IS NOT BOUND TO ARROW FUNCTIONS
		console.log(arguments);
		console.log(`hi. i'm ${this.name}`);
	},
// WORK-AROUND W/ REGULAR FUNCTIONS
	sayHiAlt () {
		// arguments array WITHIN sayHiAlt()
		console.log(arguments);
		console.log(`hi. i'm really ${this.name}`);
	}
};
user.sayHi(1, 2, 3);
user.sayHiAlt(1, 3, 16);
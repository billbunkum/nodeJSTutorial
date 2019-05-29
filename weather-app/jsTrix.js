function create() {
	let counter = 0;

	return {
		increment: function() {
			counter++;
		},
		print: function() {
			console.log(counter);
		}
	}
}
let c = create();
c.increment();
c.print();


const create2 = () => {
	let counter2 = 0;
	return {
		increment: () => {
			counter2++;
		},
		print: () => {
			console.log(counter2);
		}
	}
}

let c2 = create2();
c2.increment();
c2.print();
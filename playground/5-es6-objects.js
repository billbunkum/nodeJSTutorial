// object es6 shorthand

const name = 'Bill';
const age = 37;

const user = {
	// CAN USE name COS IT's value IS THE SAME AS IT's KEY	
	name,
	age: age,
	location: 'KY',
};

console.log(user);

// object destructuring

const product = {
	label: 'Red notebook',
	price: 3,
	stock: 201,
	salePrice: undefined
};

// OLD WAY
// const label = product.label;
// const price = product.price;

// NEW WAY
// rating DOES NOT EXIST AND IS THEREFORE undefined RATHER THAN CRASHING
const {label, price, rating} = product;
console.log(label, price, rating);

// TO CHANGE THE const FOR A PULLED OUT VALUE
const {stock:otherNameStock} = product;
console.log(otherNameStock);

// TO SET UP default VALUE
const {salePrice = 5} = product;
console.log(salePrice);

// DESTRUCTURING W/ FUNCTIONS
const transaction = (type, myProduct) => {
	const { label } = myProduct;
	console.log(label);
};

transaction('order', product);

// W/ FUNCTIONS SHORTHAND (IN-LINE)
const transaction2 = (type, { label, stock } ) => {
	console.log(type, label, stock);
};

transaction2('order', product);
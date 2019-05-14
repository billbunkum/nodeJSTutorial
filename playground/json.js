// MESSING WITH json

// CONVERTING AN OBJECT INTO A STRING
// let obj = {
// 	name: 'bill'
// };
// console.log('obj ->', typeof obj);

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// CONVERTING A STRING INTO AN OBJECT
// let personString = '{"name": "bilkkl","age": 36}';
// let person = JSON.parse(personString);
// console.log('person ->', typeof person);
// console.log(person);

// require 'fs', MAKE A NOTE object, CONVERT IT TO json, write IT TO notes.json, CONVERT IT BACK TO AN object, PRINT OUT THE typeof AND THE TITLE

// CHALLENGE SECTION 3, LECTURE 15
// USING ~.writeFileSync, ~.readFileSync, JSON.stringify(), JSON.parse()
const fs = require('fs');
let originalNote = {
	title: 'some title',
	body: 'some body'
};
// WRITE CONTENTS TO notes.json
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// PARSE AND READ notes.title FROM notes.json
let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(typeof note);
console.log('title ->', note.title);






// creating a file and appending to it
// using FileSystem Module
const fs = require('fs'); // BUNDLED PACKAGE
const os = require('os'); // BUNDLED PACKAGE
const _ = require('lodash'); // 3rd PARTY PACKAGE FROM NPM
const yargs = require('yargs'); // DEALS W/'argv' LIKE A BOSS
const notes = require('./notes.js'); // MINE OWN PACKAGE!

// USING 'yargs' the easy way
// const argv = yargs.argv;

const titleOptions = {
			describe: 'The title of a note',
			demand: true,
			alias: 't'
		};
const bodyOptions = {
			describe: 'The content of the note',
			demand: true,
			alias: 'b'
		};

const argv = yargs
	.command('add', 'Adds a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'Lists all notes')
	.command('read', 'Reads a single note', {
		title: titleOptions
	})
	.command('remove', 'Removes a single note', {
		title: titleOptions
	})
	.help()
	.argv;

// USING 'process' 
// console.log(process);
// console.log(process.argv);
// let command = process.argv[2];
let command = argv._[0];
// console.log('process argv -> Command: ', command);
// console.log('yargs -> argv: ', argv);
// console.log('command -> ', command);

if (command === 'add') {
	let note = notes.addNote(argv.title, argv.body);
	if (note) { 
		notes.logNote(note);
	} else { 
		console.log(`Duplicate titles. "${argv.title}" NOT saved.`);
	}
} else if (command === 'remove') {
	let noteRemoved = notes.removeNote(argv.title);
	let message = noteRemoved ? `${argv.title} removed` : `Error: ${argv.title} NOT removed`;
	console.log(message);
} else if (command === 'list') {
	let list = notes.getAll();
	if (list) {
		console.log(`SUCCESS!`);
		console.log(`Printing ${list.length} note(s)`);
		list.forEach( (item) => {
			notes.logNote(item);
		});
	} else {
		console.log(`Failed: Something F't up`);
	}
} else if (command === 'read') {
	let note = notes.readNote(argv.title);
	if (note) {
		notes.logNote(note);
		// console.log(`SUCCESS!: Title -> ${note[0].title}`);
		// console.log(`Body: ${note[0].body}`);
	} else {
		// console.log(`Failed: '${argv.title}' not found`);
		console.log(`Failed: '${argv.title}' not found`);
	}
} else {
	console.log('Command is not recognized');
}

// ACCESSING METHODS ON A REQUIRED LIBRARY/PACKAGE
// let user = os.userInfo();
// console.log(user);

// CALLING A FUNCTION FROM 'notes'
// let res = notes.addNote();
// console.log(res);
// console.log('result:', notes.add(9,-2));

// 3rd PARTY PACKAGES
// LODASH
// console.log(_.isString(true));
// console.log(_.isString('yep'));
// let filteredArray = (_.uniq(['bill', 1, 'bill', 1, 2, 3, 4]));
// console.log(filteredArray);

// ERROR CHECKING VERSION
// fs.appendFile('greetings.txt', `hello ${user.username}! You are ${notes.age}.`, function (err) {
//   if (err) {
//     console.log('unable to write to file');
//   }
// });

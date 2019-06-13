# Andrew Mead's *NODEJS* Tutorial

## notes-node partition

## Node Methods
1. `encodeURIComponent('<some string>')`
	`decodeURIComponent('<some string w/ symbols>`)

## 3rd Party Packages
1. Install
	+ `$ npm install <package>@<version> --save`
		+ the `save` flag includes this version in the package.json
2. Require
3. Check the DOCs (probably) the API Documentation

### Lodash
+ installing *lodash* from NPM
+ *npmjs.com* for reference
	`$ npm install lodash --save`
	+ `--save` updates the *package.json* file
	+ REQUIRE *lodash* in *app.js*
	`const _ = require('lodash');`
	+ `_` is a common variable name for *lodash*

### nodemon
+ a command-line Module which updates Node stuffs as you save
	`$ npm install nodemon -g`

### yargs
+ deals with putting *process* options into Objects
	`$ npm install yargs@4.7.1 --save`
	+ require 'yargs'
+ search `npm yargs` and then `command+F` for *methods*

#### Using `yargs.command`
+ Sets up command functions, required options and help
+ `const argv = yargs
	.command('command', 'description', {
		command-name: { options }
	})
	.help()
	.argv;`

	e.g. `const argv = yargs
	.command('add', 'adds a note', {
		title: {
			describe: 'title of a note',
			demand: true,
			alias: 't'
		})
		.help()
		.argv;`
	+ demand is `false` by default -> makes command *required*
	+ alias provides a shortcut for the command

### es6
`
module.exports = {
	property: value,
	addNote: addNote
}` is identical to
`
module.exports = {
	property,
	addNote
}`

### Debugging
+ If running NodeJS v8+ then:

#### Within Terminal
+ `$ node inspect <file>` OR `$ nodemon inspect <file>`
+ You will need to *add in-line* any options, variable-info, etc. just as if you were utilizing the app, otherwise the object won't be populated.
	e.g. `$ node inspect app.js read --title="booty"`

+ app has *not* actually started at this point
	+ Will need to use `c` to complete program or stop at `debugger;` tag w/in file.

#### Within Chrome Developer Tools
+ `$ node --inspect-brk <file>`
+ Go to Chrome and type `chrome://inspect` within the URL
	+ More info at `chrome://version`
+ Use the *Open dedicated DevTools for Node* link
+ *Nodemon* is probably BETTER as it auto-restarts

+ Commands:
	+ `list( <number> )` -> number is the number of lines you wish to view
	+ To control where *debugger stops* use:
		+ `debugger;` w/in file
	+ To move *line-by-line* use:
		+ `n` moves to next line of code
	+ `c` complete -> finishes program

	+ `repl` re-evaluate print loop -> moves out of DEBUG mode into REPL mode and 'dumps' code up to that point into REPL mode.
		+ Could type `<object name>` to see its contents
		+ Can mess around in REPL mode w/o modifying program, although it DOES modify w/in DEBUG mode

## Mapquest API Docs
+ Mapquest API `https://developer.mapquest.com/documentation/geocoding-api/#granularity`

## Sites Used
+ http://developer.forecast.io

### DARK SKY DOCS
+ A weather forecast API with 1,000 free requests per day.
+ Example: ` https://api.darksky.net/forecast/297842be681beeba3e18b115c8bab523/37.8267,-122.4233`
	+ `https://api.darksky.net/forecast/<apikey>/<lat>,<long>`
	+ `https://api.darksky.net/forecast/[key]/[latitude],[longitude]`

## Ideas & shit that gets CONFUSING
+ What is a CALLBACK Function?
	+ It is simply a Function passed into another Function with the intent that it will be 'called' later.
	+ *asynchronous* e.g.1 `setTimeout( () => { console.log('2 seconds passed')}, 2000)`
	+ *synchronous* e.g.2 `const shortNames = names.filter( (name) => { return name <= 4 })`

# Current LOCATION in tutorial
	+ Section 6: Lesson 44 'express'

## Line notes for WEATHER APP

* Accessing argv
	+ `const noob = process.argv;`
	+ `$ node app.js "some string"` 'some string' will appear as an index on `noob` and can thus be ACCESSED in the code.


## Line notes for EXPRESS

* Section 6: Lesson 43 'Explains initial setup'


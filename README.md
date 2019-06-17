# Current LOCATION in tutorial
	+ Section 6: Lesson 44 'express'

## Line notes for WEATHER APP

* Accessing argv
	+ `const noob = process.argv;`
	
	+ `$ node app.js "some string"` 'some string' will appear as an index on `noob` and can thus be ACCESSED in the code.

## Line notes for EXPRESS
* Section 6: Lesson 43 'Explains initial setup'

* Installing `hbs`, a 'templating engine' 'plugin' for Express which uses `handlebars` behind the scenes	
	+ handlebars -> for Express is called `hbs`
		`$ npm install hbs@4.0.1` (or whatever version is newest)
	
	+ Tell Express which 'templating engine' to use:
		syntax: `app.set('settingName', 'templateName')`
		e.g. `app.set('view engine', 'hbs');`

	+ `hbs` templates live in `views/` -> need to `mkdir` this guy

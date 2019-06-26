# Current LOCATION in tutorial
	+ Section 6: Lesson 44 'express'

## Line notes for WEATHER APP

* Accessing argv
	+ `const noob = process.argv;`
	
	+ `$ node app.js "some string"` 'some string' will appear as an index on `noob` and can thus be ACCESSED in the code.

## Line notes for EXPRESS & HBS
* Section 6: Lesson 43 'Explains initial setup'

* Installing & Setting up `hbs`, a 'templating engine' 'plugin' for Express which uses `handlebars` behind the scenes	
	1. handlebars -> for Express is called `hbs`
		`$ npm install hbs@4.0.1` (or whatever version is newest)
	
		+ Tell Express which 'templating engine' to use:
			syntax: `app.set('settingName', 'templateName')`
			1. `app.set('view engine', 'hbs');`

	2. `hbs` templates live in `views/` -> need to `mkdir` this guy

		+ It is beneficial to name this folder *templates* -> this requires some configuration
			1. `const viewPath = path.join(__dirname, '../templates')`

		+ View `partials` are a thing. Using them requires creating a couple extra folders and then restructuring the file structure somewhat, and thus what `viewPath` points towards
			1. `const viewsPath = path.join(__dirname, '../templates/views');`
			2. `const partialsPath = path.join(__dirname, '../templates/partials');`

		+ Finally, *register* your views & partials
			1. `app.set('views', viewsPath);`
			2. `hbs.registerPartials(partialsPath);`

		+ Setup `nodemon` to monitor files w/extensions by:
			`$ nodemon src/app.js -e js,hbs`

		+ Partials are *pieces of html* and bear the `.hbs` extension and live in `../templates/partials`. Theyare used within an HTML doc (but w/ an *.hbs* extension). 

		+ Using a Partial requires putting a `>` flag between `{{ }}` braces and then supplying the *file name* sans dir or extension. 
			e.g A Partial with the name `header.hbs`:
				`<body> 
					{{ >header }}
				</body>`

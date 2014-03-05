exports.description = "Sets up simplemocha, jshint, watch w/ livereload"

exports.template = function(grunt, init, done){

	//Other grunt templates are similiar in that they will ask you
	//the same questions for setup
	init.process({}, [
		init.prompt("name"),
		init.prompt("description"),
		//A second value will be used as default
		init.prompt("licenses", "MIT"),
		init.prompt("author_name"),
		init.prompt("author_url")
		//the second parameter is the properties that are returned
	],function(err, props){
		//any files in the root/ subdirectory will be copied to the current
		//directory when the init template is run.
		var files = init.filesToCopy(props);
		//add the license to the files object
		init.addLicenseFiles(files, props.licenses);
		//finally copy the files from the root folder
		init.copyAndProcess(files, props);

		init.writePackageJSON("package.json", {
			name: props.name,
			version: props.version,
			author: {
				name: props.author_name,
				url : props.author_url
			},
			description: props.description,
			devDependencies: {
    		"grunt-simple-mocha": "~0.4.0",
    		"grunt": "~0.4.2",
    		"grunt-contrib-jshint": "~0.8.0",
    		"grunt-contrib-watch": "~0.5.3"
  		},
		});
		done();
	});
};

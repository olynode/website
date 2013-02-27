/*globals desc, task, jake, fail, complete */
(function(){
	'use strict';

	desc('build and test');
	task('default', ['lint']);

	desc('lint everything');
	task('lint', [], function(){
		var lint = require('jake-jshint');
		var options = nodeLintOptions();
		var files = new jake.FileList();
		
		files.include('**/*.js');
		files.exclude('public');
		files.exclude('node_modules');
		
		if(!lint.validateFileList(files.toArray(), options, {}))
			fail('lint failed');
	});

	function nodeLintOptions() {
		return {
			bitwise: true,
			curly: false,
			eqeqeq: true,
			forin: true,
			immed: true,
			latedef: true,
			newcap: true,
			noarg: true,
			noempty: true,
			nonew: true,
			regexp: true,
			undef: true,
			strict: true,
			trailing: true,
			node: true
		};
	}
}());
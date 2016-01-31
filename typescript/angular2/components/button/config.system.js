System.config({
	packages: {        
		dist: {
			format: 'register',
			defaultExtension: 'js'
		}
	}
});
System.import('dist/src/boot')
	.then(null, console.error.bind(console));
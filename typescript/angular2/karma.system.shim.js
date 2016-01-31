Error.stackTraceLimit=Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
__karma__.loaded = function() {};

System.config({
	packages: {
		'rxjs': {
			defaultJSExtensions: true,
			paths: {
				'rxjs/*': 'node_modules/rxjs/*.js'
			}
		},
		'base/components/button/dist': {
			defaultExtension: false,
			format: 'register',
			map: Object.keys(window.__karma__.files).
				filter(onlyAppFiles).
					reduce(function createPathRecords(pathsMapping, appPath) {
						var moduleName = appPath
							.replace(/^\/base\/components\/button\/dist\//, './')
							.replace(/\.js$/, '');
						pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath];
						return pathsMapping;
					}, {})
		}
	}
});

System.import('angular2/src/platform/browser/browser_adapter')
	.then(function(browser_adapter) {
		browser_adapter.BrowserDomAdapter.makeCurrent();
	}).then(function() {
		return Promise.all(
			Object.keys(window.__karma__.files)
				.filter(onlySpecFiles)
				.map(function(moduleName) {
					return System.import(moduleName);
				})
		);
	}).then(function() {
		__karma__.start();
	}, function(error) {
		__karma__.error(error.stack || error);
	});

function filePath2moduleName(filePath) {
	return filePath.
		replace(/^\//, '').
		replace(/\.\w+$/, '');
}

function onlyAppFiles(filePath) {
	return /^\/base\/components\/button\/dist\/.*\.js$/
		.test(filePath)
}

function onlySpecFiles(path) {
	return /unit.spec\.js$/
		.test(path);
}
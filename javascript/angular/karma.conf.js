module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'node_modules/angular/angular.min.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'components/button/src/button-module.js',
			'components/button/src/utilities-factory.js',
			'components/button/src/button-controller.js',
			'components/button/src/button-directive.js',
			'components/button/test/button-unit-spec.js'
		],
		exclude: [],
		port: 8080,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		singleRun: false
	});
};
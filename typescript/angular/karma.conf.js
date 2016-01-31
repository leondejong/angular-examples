module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'node_modules/angular/angular.min.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'components/button/app.js',
			'components/button/button-unit-spec.js'
		],
		exclude: [],
		port: 8080,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		singleRun: false
	});
};
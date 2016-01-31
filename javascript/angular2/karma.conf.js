module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		plugins:[
			'karma-jasmine',
			'karma-chrome-launcher'
		],
		files: [
			{pattern: 'node_modules/angular2/bundles/angular2-polyfills.js'},
			{pattern: 'node_modules/rxjs/bundles/Rx.umd.min.js'},
			{pattern: 'node_modules/angular2/bundles/angular2-all-testing.umd.dev.js'},
			
			// {pattern: 'components/button/src/utilities.service.js'},
			// {pattern: 'components/button/src/button.component.js'},
			// {pattern: 'components/button/src/main.component.js'},
			// {pattern: 'components/button/src/boot.js'},
			// {pattern: 'components/button/test/button.unit.spec.js'}
			
			{pattern: 'components/**/*.js'},
			{pattern: 'components/**/*.html'}
		],
		proxies: {
			//'/rxjs/': '/base/node_modules/rxjs/',
			'/src/': '/base/components/button/src/'
		},
		exclude: [
			'components/button/gulpfile.js',
			'components/button/app.js',
			'components/button/index.html'
		],
		port: 8080,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false
	});
};
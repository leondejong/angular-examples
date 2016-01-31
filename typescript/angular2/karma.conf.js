module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		plugins:[
			'karma-jasmine',
			'karma-chrome-launcher'
		],
		files: [
			{pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
			{pattern: 'node_modules/reflect-metadata/Reflect.js'},
			{pattern: 'node_modules/es6-shim/es6-shim.js'},
			{pattern: 'node_modules/zone.js/dist/zone-microtask.js'},
			{pattern: 'node_modules/systemjs/dist/system.src.js'},
			{pattern: 'node_modules/systemjs/dist/system-polyfills.js'},
			{pattern: 'node_modules/angular2/bundles/angular2.js'},
			{pattern: 'node_modules/angular2/bundles/testing.dev.js'},
			{pattern: 'karma.system.shim.js'},
			
			{pattern: 'components/**/*.js', included: false},
			{pattern: 'components/button/src/**/*.html'}
		],
		proxies: {
			'/rxjs/': '/base/node_modules/rxjs/',
			'/src/': '/base/components/button/src/'
		},
		exclude: [],
		port: 8080,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false
	});
};
(function(ButtonModule) {
	"Use strict";
	document.addEventListener('DOMContentLoaded', function() {
		ng.platform.browser.bootstrap(ButtonModule.MainComponent);
	});
})(window.ButtonModule || (window.ButtonModule = {}));
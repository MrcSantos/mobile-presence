var app = {
	/**
	 * Application Constructor, fires the deviceReady event
	 * */
	initialize: function () {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
	},

	/**
	 ** The app starts here, after the deviceReady event
	 */
	onDeviceReady: function () { getCredentials(() => { checkCredentials(() => { startApp() }) }) }
};

app.initialize();

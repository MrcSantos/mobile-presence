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
	onDeviceReady: function () {
		init();
		startApp();
	}
};

//--------------------------------------------------// Things to do before the app runs

/**
 * Things to do before the app runs
 */
function init() {
	// TODO Initialize gui and Vue
	dbg.status = 'Waiting for bluetooth...';
}

//--------------------------------------------------// Initialization of the Vue instances + Cordova app

var dbg = new Vue({
	el: '#dbg',
	data: {
		status: 'App loading...',
		connection: 'App loading...'
	}
})

app.initialize();

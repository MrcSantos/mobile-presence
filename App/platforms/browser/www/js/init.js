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
function init() { }

//--------------------------------------------------// Initialization of the Vue instances + Cordova app

const gui = new Vue({
	el: '#gui',

	data: {
		bt: 'init',
		scan: 'init',
		db: 'init',
		devices: []
	}
});

app.initialize();

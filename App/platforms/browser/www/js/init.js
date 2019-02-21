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
		getCredentials(() => {
			authenticated();
			getPermittedDevices();
		}, () => { notAuthenticated() })
	}
};

function getPermittedDevices() {
	db.collection("devices")
		.where("factory", "==", USER.factory)
		.get()
		.then((data) => {
			data.forEach(() => {
				permittedDevices.push(data.data().id)
			});

			startApp();
		})
}

var permittedDevices = [];

app.initialize();

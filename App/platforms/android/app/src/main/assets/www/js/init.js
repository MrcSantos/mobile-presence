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
			authenticateUser();
			getPermittedDevices();
			startApp();
		}, () => { unauthenticateUser() })
	}
};

function getPermittedDevices() {
	db.collection("devices")
		.where("factory", "==", USER.factory)
		.get()
		.then((data) => {
			data.forEach((doc) => {
				permittedDevices.push(doc.data().id)
			});
		})
}

var permittedDevices = [];

app.initialize();

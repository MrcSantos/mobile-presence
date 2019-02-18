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
		checkCredentials(() => { startApp() });
	}
};

//--------------------------------------------------// Things to do before the app runs

/**
 * Checks the user credentials
 */
function checkCredentials(callback) {
	window.plugins.uniqueDeviceID.get((id) => {
		userUniqueId = id;
		gui.id = 'Your personal id: ' + id;
	});

	db.collection("users").get().then(function (querySnapshot) {
		querySnapshot.forEach(function (doc) {
			if (doc.id === userUniqueId) { callback() }
		});
	});
}

//--------------------------------------------------// Initialization of the Vue instances + Cordova app

const gui = new Vue({
	el: '#gui',

	data: {
		bt: 'init',
		scan: 'init',
		db: 'init',
		id: '',
		debug: '',
		devices: []
	}
});

app.initialize();

function toggleDebug() {
	var dbg = document.getElementById("dbg");
	var std = document.getElementById("std");

	if (dbg.style.display === "none") {
		std.style.display = "none";
		dbg.style.display = "block";
	} else {
		dbg.style.display = "none";
		std.style.display = "block";
	}
}

var userUniqueId = '';

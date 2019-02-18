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
		/* startApp(); */
	}
};

//--------------------------------------------------// Things to do before the app runs

/**
 * Things to do before the app runs
 */
function init() {
	db.collection("users").get().then(function (querySnapshot) {
		querySnapshot.forEach(function (doc) {
			console.log(doc.id + ' - ' + userUniqueId);

			if (doc.id === userUniqueId) {
				startApp();
			}
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

window.plugins.uniqueDeviceID.get((id) => { userUniqueId = id });

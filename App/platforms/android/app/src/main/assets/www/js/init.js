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

var userUniqueId = '';

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

const pre = new Vue({
	el: '#presences',

	data: {
		presences: [
			{
				user: {
					name: 'Mirco',
					surname: 'Santosuosso'
				},
				uuid: 'eugihewu92af32',
				name: 'Jalee',
				status: 'on',
				datetime: 1550568478135,
				rssi: -56
			},
			{
				user: {
					name: 'Mirco',
					surname: 'Santosuosso'
				},
				uuid: 'eugihewu92af32',
				name: 'Jalee',
				status: 'on',
				datetime: 1550568478135,
				rssi: -56
			},
			{
				user: {
					name: 'Mirco',
					surname: 'Santosuosso'
				},
				uuid: 'eugihewu92af32',
				name: 'Jalee',
				status: 'on',
				datetime: 1550568478135,
				rssi: -56
			},
			{
				user: {
					name: 'Mirco',
					surname: 'Santosuosso'
				},
				uuid: 'eugihewu92af32',
				name: 'Jalee',
				status: 'on',
				datetime: 1550568478135,
				rssi: -56
			},
			{
				user: {
					name: 'Mirco',
					surname: 'Santosuosso'
				},
				uuid: 'eugihewu92af32',
				name: 'Jalee',
				status: 'on',
				datetime: 1550568478135,
				rssi: -56
			},
			{
				user: {
					name: 'Mirco',
					surname: 'Santosuosso'
				},
				uuid: 'eugihewu92af32',
				name: 'Jalee',
				status: 'on',
				datetime: 1550568478135,
				rssi: -56
			},
			{
				user: {
					name: 'Mirco',
					surname: 'Santosuosso'
				},
				uuid: 'eugihewu92af32',
				name: 'Jalee',
				status: 'on',
				datetime: 1550568478135,
				rssi: -56
			},
			{
				user: {
					name: 'Mirco',
					surname: 'Santosuosso'
				},
				uuid: 'eugihewu92af32',
				name: 'Jalee',
				status: 'on',
				datetime: 1550568478135,
				rssi: -56
			},
			{
				user: {
					name: 'Mirco',
					surname: 'Santosuosso'
				},
				uuid: 'eugihewu92af32',
				name: 'Jalee',
				status: 'on',
				datetime: 1550568478135,
				rssi: -56
			},
			{
				user: {
					name: 'Mirco',
					surname: 'Santosuosso'
				},
				uuid: 'eugihewu92af32',
				name: 'Jalee',
				status: 'on',
				datetime: 1550568478135,
				rssi: -56
			}
		]
	}
});

app.initialize();

function toggleDebug() {
	var dbg = document.getElementById("dbg");
	var std = document.getElementById("std");
	var pre = document.getElementById("pre");

	pre.style.display = "none";

	if (std.style.display === "none") {
		dbg.style.display = "none";
		std.style.display = "block";
	} else {
		std.style.display = "none";
		dbg.style.display = "block";
	}
}

function togglePresences() {
	var dbg = document.getElementById("dbg");
	var std = document.getElementById("std");
	var pre = document.getElementById("pre");

	std.style.display = "none";
	dbg.style.display = "none";

	if (pre.style.display === "none") {
		pre.style.display = "block";
	} else {
		pre.style.display = "none";
		std.style.display = "block";
	}
}

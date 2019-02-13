const db = firebase.firestore() // Database engine initialisation
var userUniqueId = 'user12345'; //FIXME  Use another user id

/**
 * Sets the status connection to off and pushes the device proprieties to the db
 *
 * @param {Object} dev The device proprieties to push to the db
 */
function dbCloseOldConnection(dev) {
	dbWrite(dev, 'off');
}

/**
 * Sets the status connection to off and pushes the device proprieties to the db
 *
 * @param {Object} dev The device proprieties to push to the db
 */
function dbOpenNewConnection(dev) {
	dbWrite(dev, 'on');
}

//--------------------------------------------------// Functions

/**
 * Restarts the app
 *
 * @param {Object} dev The device currently saved in the db
 */
function restart(dev) {
	setTimeout(() => {
		devices = [];
		lastDevice = dev;
		startApp();
	}, 5000);
}

/**
 * Writes the data on the db
 *
 * @param {Object} dev The device's proprieties to push
 * @param {String} status The connection status
 */
function dbWrite(dev, status) {
	var docRef = db.collection("presences").doc("presences");

	const datetime = new Date().getMilliseconds();
	var data = { //* The data object to push
		name: dev.name,
		uuid: dev.id,
		rssi: dev.rssi,
		user: userUniqueId,
		status: status,
		time: datetime
	};

	docRef.set(data)
		.then(() => {
			dbStop();
			restart(dev)
		})
		.catch((error) => {
			dbFail(error);
		});
}

//--------------------------------------------------// Functions to update the status

/**
 * Updates the db status, showing the running icon
 */
function dbStart() {
	// TODO Update status db to running
	dbg.status = 'Database running';
}

/**
 * Updates the db status, showing the ok icon
 */
function dbStop() {
	// TODO Update status db to ok
	dbg.status = 'Database stop';
}

/**
 * Updates the db status, showing the fail icon
 */
function dbFail() {
	// TODO Update status db to fail
	dbg.status = 'Database fail';
}

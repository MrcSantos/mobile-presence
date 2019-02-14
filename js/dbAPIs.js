const db = firebase.firestore() // Database engine initialisation
var userUniqueId = 'user12345'; //FIXME  Use another user id
const restartSeconds = 20; // Restart wait seconds

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

//--------------------------------------------------// Write function

/**
 * Writes the data on the db
 *
 * @param {Object} dev The device's proprieties to push
 * @param {String} status The connection status
 */
function dbWrite(dev, status) {
	dbStart();

	var doc = db.collection("presences").doc(); //* The destination db collection

	const datetime = Date.now();
	var data = { //* The data object to push
		name: dev.name,
		uuid: dev.id,
		rssi: dev.rssi,
		user: userUniqueId,
		status: status,
		datetime: datetime
	};

	doc.set(data) //* Data write API
		.then(() => { //* Success writing
			dbStop();
			restart(dev)
		})
		.catch((error) => { //* Fail writing
			dbFail(error);
			restart()
		});
}

//--------------------------------------------------// Functions after writing on db

/**
 * Restarts the app
 *
 * @param {Object} dev The device currently saved in the db
 */
function restart(dev) {
	//* Resets the variables
	dbg.connection = '';
	scannedDevices = [];

	if (isDef(dev)) { lastDevice = copyObj(dev) } //* If a device is given it saves it as the last device

	setTimeout(() => { //* Restarts the app after the given seconds
		startApp();
	}, restartSeconds * 1000);
}

/**
 * Returns the object values
 *
 * @param {*} obj The object to copy
 */
function copyObj(obj) {
	return JSON.parse(JSON.stringify(obj));
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
function dbFail(e) {
	// TODO Update status db to fail
	dbg.status = '<b style="color: firebrick;">Database failed, no network detected or an error has occurred</b><br>' + e;
}
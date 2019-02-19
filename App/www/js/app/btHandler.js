var lastDevice = 'none';

/**
 * Handles the devices found from the scan
 *
 * @param {Array} devices The devices found from the scan
 */
function devsHandler(devices) {
	if (isDef(devices)) { //* If there are devices found
		var nearDevice = getNearestDevice(devices);

		//* First run
		if (lastDevice === 'none') { dbOpenNewConnection(nearDevice) }
		else { //* Not first run
			if (lastDevice.id !== nearDevice.id) { //* If the current nearest device is not the last one
				dbCloseOldConnection(lastDevice);
				dbOpenNewConnection(nearDevice);
			}
		}
	}

	//* If there are NO devices found or the nearest device equals the last one
	restart();
}

/**
 * Returns the nearest bt device
 *
 * @param {Array} devices The devices found from the scan
 */
function getNearestDevice(devices) {
	var nearest = devices[0];

	for (const dev in devices) {
		if (devices.hasOwnProperty(dev)) {
			const element = devices[dev];

			if (element.rssi > nearest.rssi) { nearest = element }
		}
	}

	return nearest
}

/**
 * Checks if an object is empty
 *
 * @param {*} obj The object to check
 */
function isEmpty(obj) {
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop))
			return false;
	}

	return true;
}

/**
 * What to do with the devices?
 * Warning, this function is called everytime a device is discovered in a scan
 */
function devsHandler(devices) {
	nearDev = getNearestDevice(devices);

	if (!isEmpty(lastDevice) && !JSON.stringify(lastDevice) === JSON.stringify(nearDev)) {
		dbCloseOldConnection(lastDevice);
	}
	else {
		dbCloseOldConnection(lastDevice);
		dbOpenNewConnection(nearDev);
	}

}

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

function isEmpty(obj) {
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop))
			return false;
	}

	return true;
}
